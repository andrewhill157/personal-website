---
title: Managing Hosts with SSH Config
layout: post
tags: bash cluster_computing
---
In this post I hope to show that using SSH config to manage connections to remote hosts can provide extra flexibility and convenience. This is a tool that not everyone seems to know about, so I want to show why you might consider setting it up. 

##A Common Approach: Aliases
Consider a common approach to connecting to a host several times per day -- you might define an alias in your `~/.bashrc` file to connect to hosts:

    alias connect="ssh myusername@mydomain.com"
    alias connect_other="ssh myusername@myotherdomain.com"
    
This is certainly an improvement over typing in the full command every time, but now imagine you want to scp from that same host. Your aliases won't help you here, so you might define another set:

    alias getfile="scp myusername@mydomain.com"
    alias getfile_other="scp myusername@myotherdomain.com"
    
Unfortunately, for any other command or host you want to use, you have to add all the relevant aliases. This will involve lots of copy-pasting and hard-coding complex sets flags if more involved configurations are needed. This is complicated and makes commands less flexible.

##An Elegant Alternative: ~/.ssh/config
The following is an example of what a file located at `~/.ssh/config` on your local machine might look like:

    Host one
        HostName host1.mydomain.com
        User myname
        
    Host two
	 HostName host2.mydomain.com
	 User myothername

    Host three
	 HostName host3.mydomain.com
	 User yetanothername

    Host four
	 HostName host4.mydomain.com
	 User myname
	 
Now commands like the following automatically work:

    ssh one
    ssh two
    scp three:/path/*.txt .
    
Let's say you want to increase the activity timeout on all hosts. Rather than changing all of your aliases, you can simply add the following to your `~/.ssh/config`:

    Host *
        ServerAliveInterval 240
        
Note that for this particular option, you have to `chmod 600 ~/.ssh/config` so it is not world-readable.

You can specify what would otherwise be a complex series of flags for inputs like identity files, local redirects, number of retries all within this one file and any command involving one of the hosts will take advantage of these settings. A complete list of options can be found on the [relevant man pages](http://unixhelp.ed.ac.uk/CGI/man-cgi?ssh_config+5).

If you haven't already, you can combine this with a key-based login rather than typing a password in every time you connect. This is very easy to do with `ssh-keygen` (to generate the key) and a tool like `ssh-copy-id`. Instructions for doing so in three steps for any host can be found [here](http://www.thegeekstuff.com/2008/11/3-steps-to-perform-ssh-login-without-password-using-ssh-keygen-ssh-copy-id/).   
    
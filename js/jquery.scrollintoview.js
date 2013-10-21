


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-scrollintoview/jquery.scrollintoview.js at master · litera/jquery-scrollintoview · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe118-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="48F8D4B2:78F5:2E0462CA:5265482B" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="M+3gJc+XRRPOSGySrl+cnH0203XKGq5ywqD1uXiXkwc=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-d6774860c472c858fefc70ae054086830bd30176.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-67a69fecb8a1f29cea07c1b7f437a9ad4573f0b4.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-8a61e23841d9e5ecc084748ec552e548cd05c977.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-a3b3709d87ed3ca2cd30bf660f8567ac67249e1e.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="7dcf1f87bdf05e208cb50b4c57177a4e">

        <link data-pjax-transient rel='permalink' href='/litera/jquery-scrollintoview/blob/06834cf7fdba0e86cac84ed7761ea64a3a5fbec8/jquery.scrollintoview.js'>
  <meta property="og:title" content="jquery-scrollintoview"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/litera/jquery-scrollintoview"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jquery-scrollintoview - Animated scroll into view jQuery plugin"/>

  <meta name="description" content="jquery-scrollintoview - Animated scroll into view jQuery plugin" />

  <meta content="800583" name="octolytics-dimension-user_id" /><meta content="litera" name="octolytics-dimension-user_login" /><meta content="1859744" name="octolytics-dimension-repository_id" /><meta content="litera/jquery-scrollintoview" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1859744" name="octolytics-dimension-repository_network_root_id" /><meta content="litera/jquery-scrollintoview" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/litera/jquery-scrollintoview/commits/master.atom" rel="alternate" title="Recent Commits to jquery-scrollintoview:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Flitera%2Fjquery-scrollintoview%2Fblob%2Fmaster%2Fjquery.scrollintoview.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="litera/jquery-scrollintoview"
      data-branch="master"
      data-sha="ac18d62b07915075a3ceb819aede528021093633"
  >

    <input type="hidden" name="nwo" value="litera/jquery-scrollintoview" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Flitera%2Fjquery-scrollintoview"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/litera/jquery-scrollintoview/stargazers">
  113
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Flitera%2Fjquery-scrollintoview"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/litera/jquery-scrollintoview/network" class="social-count">
        58
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/litera" class="url fn" itemprop="url" rel="author"><span itemprop="title">litera</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/litera/jquery-scrollintoview" class="js-current-repository js-repo-home-link">jquery-scrollintoview</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/litera/jquery-scrollintoview" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /litera/jquery-scrollintoview">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/litera/jquery-scrollintoview/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /litera/jquery-scrollintoview/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>10</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/litera/jquery-scrollintoview/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /litera/jquery-scrollintoview/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>5</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/litera/jquery-scrollintoview/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /litera/jquery-scrollintoview/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/litera/jquery-scrollintoview/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /litera/jquery-scrollintoview/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/litera/jquery-scrollintoview/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /litera/jquery-scrollintoview/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/litera/jquery-scrollintoview.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/litera/jquery-scrollintoview.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/litera/jquery-scrollintoview" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/litera/jquery-scrollintoview" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

              <a href="/litera/jquery-scrollintoview/archive/master.zip"
                 class="minibutton sidebar-button"
                 title="Download this repository as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:6e894cc4225d186bd49af767e76fb124 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/litera/jquery-scrollintoview/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litera/jquery-scrollintoview/blob/master/jquery.scrollintoview.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litera/jquery-scrollintoview/tree/v1.8/jquery.scrollintoview.js"
                 data-name="v1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.8">v1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/litera/jquery-scrollintoview/tree/help/jquery.scrollintoview.js"
                 data-name="help"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="help">help</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/litera/jquery-scrollintoview" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-scrollintoview</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.scrollintoview.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.scrollintoview.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>



  <div class="commit file-history-tease">
      <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/eb12cd42a3508351122a02dbc0c4f186?d=https%3A%2F%2Fidenticons.github.com%2Ff1b97cbbf1a26dc04a26dd038f749806.png&amp;s=140" width="24" />
      <span class="author"><a href="/litera" rel="author">litera</a></span>
      <time class="js-relative-date" datetime="2011-07-14T06:07:11-07:00" title="2011-07-14 06:07:11">July 14, 2011</time>
      <div class="commit-title">
          <a href="/litera/jquery-scrollintoview/commit/fa1a3e028e66bdf369d5bef02a826747d177de20" class="message" data-pjax="true" title="updated to version 1.8 --

supports touch-screen clients (ie. iPad) that usually don&#39;t display scrollbars, but still allow element scrolling">updated to version 1.8 --</a>
      </div>

      <div class="participation">
        <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
        
      </div>
      <div id="blob_contributors_box" style="display:none">
        <h2 class="facebox-header">Users who have contributed to this file</h2>
        <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img height="24" src="https://2.gravatar.com/avatar/eb12cd42a3508351122a02dbc0c4f186?d=https%3A%2F%2Fidenticons.github.com%2Ff1b97cbbf1a26dc04a26dd038f749806.png&amp;s=140" width="24" />
            <a href="/litera">litera</a>
          </li>
        </ul>
      </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>209 lines (187 sloc)</span>
        <span>6.717 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped leftwards"
               href="http://windows.github.com" title="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/litera/jquery-scrollintoview/raw/master/jquery.scrollintoview.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/litera/jquery-scrollintoview/blame/master/jquery.scrollintoview.js" class="button minibutton ">Blame</a>
          <a href="/litera/jquery-scrollintoview/commits/master/jquery.scrollintoview.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger empty-icon js-entice" href=""
             data-entice="You must be signed in and on a branch to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>

            </td>
            <td class="blob-line-code">
                    <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * jQuery scrollintoview() plugin and :scrollable selector filter</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Version 1.8 (14 Jul 2011)</span></div><div class='line' id='LC5'><span class="cm"> * Requires jQuery 1.4 or newer</span></div><div class='line' id='LC6'><span class="cm"> *</span></div><div class='line' id='LC7'><span class="cm"> * Copyright (c) 2011 Robert Koritnik</span></div><div class='line' id='LC8'><span class="cm"> * Licensed under the terms of the MIT license</span></div><div class='line' id='LC9'><span class="cm"> * http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC10'><span class="cm"> */</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'>	<span class="kd">var</span> <span class="nx">converter</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC14'>		<span class="nx">vertical</span><span class="o">:</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="kc">true</span> <span class="p">},</span></div><div class='line' id='LC15'>		<span class="nx">horizontal</span><span class="o">:</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="kc">false</span> <span class="p">},</span></div><div class='line' id='LC16'>		<span class="nx">both</span><span class="o">:</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="kc">true</span> <span class="p">},</span></div><div class='line' id='LC17'>		<span class="nx">x</span><span class="o">:</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="kc">false</span> <span class="p">},</span></div><div class='line' id='LC18'>		<span class="nx">y</span><span class="o">:</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="kc">true</span> <span class="p">}</span></div><div class='line' id='LC19'>	<span class="p">};</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'>	<span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC22'>		<span class="nx">duration</span><span class="o">:</span> <span class="s2">&quot;fast&quot;</span><span class="p">,</span></div><div class='line' id='LC23'>		<span class="nx">direction</span><span class="o">:</span> <span class="s2">&quot;both&quot;</span></div><div class='line' id='LC24'>	<span class="p">};</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>	<span class="kd">var</span> <span class="nx">rootrx</span> <span class="o">=</span> <span class="sr">/^(?:html)$/i</span><span class="p">;</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="c1">// gets border dimensions</span></div><div class='line' id='LC29'>	<span class="kd">var</span> <span class="nx">borders</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="nx">styles</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC30'>		<span class="nx">styles</span> <span class="o">=</span> <span class="nx">styles</span> <span class="o">||</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span> <span class="o">?</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="kc">null</span><span class="p">)</span> <span class="o">:</span> <span class="nx">domElement</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">);</span></div><div class='line' id='LC31'>		<span class="kd">var</span> <span class="nx">px</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC32'>		<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC33'>			<span class="nx">top</span><span class="o">:</span> <span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">px</span> <span class="o">?</span> <span class="nx">styles</span><span class="p">.</span><span class="nx">borderTopWidth</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="s2">&quot;borderTopWidth&quot;</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span></div><div class='line' id='LC34'>			<span class="nx">left</span><span class="o">:</span> <span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">px</span> <span class="o">?</span> <span class="nx">styles</span><span class="p">.</span><span class="nx">borderLeftWidth</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="s2">&quot;borderLeftWidth&quot;</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span></div><div class='line' id='LC35'>			<span class="nx">bottom</span><span class="o">:</span> <span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">px</span> <span class="o">?</span> <span class="nx">styles</span><span class="p">.</span><span class="nx">borderBottomWidth</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="s2">&quot;borderBottomWidth&quot;</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">),</span></div><div class='line' id='LC36'>			<span class="nx">right</span><span class="o">:</span> <span class="p">(</span><span class="nb">parseFloat</span><span class="p">(</span><span class="nx">px</span> <span class="o">?</span> <span class="nx">styles</span><span class="p">.</span><span class="nx">borderRightWidth</span> <span class="o">:</span> <span class="nx">$</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="nx">domElement</span><span class="p">,</span> <span class="s2">&quot;borderRightWidth&quot;</span><span class="p">))</span> <span class="o">||</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC37'>		<span class="p">};</span></div><div class='line' id='LC38'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC39'>			<span class="nx">top</span><span class="o">:</span> <span class="nx">b</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span></div><div class='line' id='LC40'>			<span class="nx">left</span><span class="o">:</span> <span class="nx">b</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span></div><div class='line' id='LC41'>			<span class="nx">bottom</span><span class="o">:</span> <span class="nx">b</span><span class="p">.</span><span class="nx">bottom</span><span class="p">,</span></div><div class='line' id='LC42'>			<span class="nx">right</span><span class="o">:</span> <span class="nx">b</span><span class="p">.</span><span class="nx">right</span><span class="p">,</span></div><div class='line' id='LC43'>			<span class="nx">vertical</span><span class="o">:</span> <span class="nx">b</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">b</span><span class="p">.</span><span class="nx">bottom</span><span class="p">,</span></div><div class='line' id='LC44'>			<span class="nx">horizontal</span><span class="o">:</span> <span class="nx">b</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">b</span><span class="p">.</span><span class="nx">right</span></div><div class='line' id='LC45'>		<span class="p">};</span></div><div class='line' id='LC46'>	<span class="p">};</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>	<span class="kd">var</span> <span class="nx">dimensions</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>		<span class="kd">var</span> <span class="nx">win</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">);</span></div><div class='line' id='LC50'>		<span class="kd">var</span> <span class="nx">isRoot</span> <span class="o">=</span> <span class="nx">rootrx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nodeName</span><span class="p">);</span></div><div class='line' id='LC51'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC52'>			<span class="nx">border</span><span class="o">:</span> <span class="nx">isRoot</span> <span class="o">?</span> <span class="p">{</span> <span class="nx">top</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">left</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bottom</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">right</span><span class="o">:</span> <span class="mi">0</span><span class="p">}</span> <span class="o">:</span> <span class="nx">borders</span><span class="p">(</span><span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span></div><div class='line' id='LC53'>			<span class="nx">scroll</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC54'>				<span class="nx">top</span><span class="o">:</span> <span class="p">(</span><span class="nx">isRoot</span> <span class="o">?</span> <span class="nx">win</span> <span class="o">:</span> <span class="nx">$element</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">(),</span></div><div class='line' id='LC55'>				<span class="nx">left</span><span class="o">:</span> <span class="p">(</span><span class="nx">isRoot</span> <span class="o">?</span> <span class="nx">win</span> <span class="o">:</span> <span class="nx">$element</span><span class="p">).</span><span class="nx">scrollLeft</span><span class="p">()</span></div><div class='line' id='LC56'>			<span class="p">},</span></div><div class='line' id='LC57'>			<span class="nx">scrollbar</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC58'>				<span class="nx">right</span><span class="o">:</span> <span class="nx">isRoot</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">innerWidth</span><span class="p">()</span> <span class="o">-</span> <span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientWidth</span><span class="p">,</span></div><div class='line' id='LC59'>				<span class="nx">bottom</span><span class="o">:</span> <span class="nx">isRoot</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">$element</span><span class="p">.</span><span class="nx">innerHeight</span><span class="p">()</span> <span class="o">-</span> <span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientHeight</span></div><div class='line' id='LC60'>			<span class="p">},</span></div><div class='line' id='LC61'>			<span class="nx">rect</span><span class="o">:</span> <span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">getBoundingClientRect</span><span class="p">();</span></div><div class='line' id='LC63'>				<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC64'>					<span class="nx">top</span><span class="o">:</span> <span class="nx">isRoot</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span></div><div class='line' id='LC65'>					<span class="nx">left</span><span class="o">:</span> <span class="nx">isRoot</span> <span class="o">?</span> <span class="mi">0</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span></div><div class='line' id='LC66'>					<span class="nx">bottom</span><span class="o">:</span> <span class="nx">isRoot</span> <span class="o">?</span> <span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientHeight</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">bottom</span><span class="p">,</span></div><div class='line' id='LC67'>					<span class="nx">right</span><span class="o">:</span> <span class="nx">isRoot</span> <span class="o">?</span> <span class="nx">$element</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">clientWidth</span> <span class="o">:</span> <span class="nx">r</span><span class="p">.</span><span class="nx">right</span></div><div class='line' id='LC68'>				<span class="p">};</span></div><div class='line' id='LC69'>			<span class="p">})()</span></div><div class='line' id='LC70'>		<span class="p">};</span></div><div class='line' id='LC71'>	<span class="p">};</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">extend</span><span class="p">({</span></div><div class='line' id='LC74'>		<span class="nx">scrollintoview</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>			<span class="c1">/// &lt;summary&gt;Scrolls the first element in the set into view by scrolling its closest scrollable parent.&lt;/summary&gt;</span></div><div class='line' id='LC76'>			<span class="c1">/// &lt;param name=&quot;options&quot; type=&quot;Object&quot;&gt;Additional options that can configure scrolling:</span></div><div class='line' id='LC77'>			<span class="c1">///        duration (default: &quot;fast&quot;) - jQuery animation speed (can be a duration string or number of milliseconds)</span></div><div class='line' id='LC78'>			<span class="c1">///        direction (default: &quot;both&quot;) - select possible scrollings (&quot;vertical&quot; or &quot;y&quot;, &quot;horizontal&quot; or &quot;x&quot;, &quot;both&quot;)</span></div><div class='line' id='LC79'>			<span class="c1">///        complete (default: none) - a function to call when scrolling completes (called in context of the DOM element being scrolled)</span></div><div class='line' id='LC80'>			<span class="c1">/// &lt;/param&gt;</span></div><div class='line' id='LC81'>			<span class="c1">/// &lt;return type=&quot;jQuery&quot;&gt;Returns the same jQuery set that this function was run on.&lt;/return&gt;</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>			<span class="nx">options</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC84'>			<span class="nx">options</span><span class="p">.</span><span class="nx">direction</span> <span class="o">=</span> <span class="nx">converter</span><span class="p">[</span><span class="k">typeof</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span><span class="p">)</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">direction</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]</span> <span class="o">||</span> <span class="nx">converter</span><span class="p">.</span><span class="nx">both</span><span class="p">;</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>			<span class="kd">var</span> <span class="nx">dirStr</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC87'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span><span class="p">.</span><span class="nx">x</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="nx">dirStr</span> <span class="o">=</span> <span class="s2">&quot;horizontal&quot;</span><span class="p">;</span></div><div class='line' id='LC88'>			<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span><span class="p">.</span><span class="nx">y</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span> <span class="nx">dirStr</span> <span class="o">=</span> <span class="nx">dirStr</span> <span class="o">?</span> <span class="s2">&quot;both&quot;</span> <span class="o">:</span> <span class="s2">&quot;vertical&quot;</span><span class="p">;</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>			<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC91'>			<span class="kd">var</span> <span class="nx">scroller</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="s2">&quot;:scrollable(&quot;</span> <span class="o">+</span> <span class="nx">dirStr</span> <span class="o">+</span> <span class="s2">&quot;)&quot;</span><span class="p">);</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>			<span class="c1">// check if there&#39;s anything to scroll in the first place</span></div><div class='line' id='LC94'>			<span class="k">if</span> <span class="p">(</span><span class="nx">scroller</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC95'>			<span class="p">{</span></div><div class='line' id='LC96'>				<span class="nx">scroller</span> <span class="o">=</span> <span class="nx">scroller</span><span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>				<span class="kd">var</span> <span class="nx">dim</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC99'>					<span class="nx">e</span><span class="o">:</span> <span class="nx">dimensions</span><span class="p">(</span><span class="nx">el</span><span class="p">),</span></div><div class='line' id='LC100'>					<span class="nx">s</span><span class="o">:</span> <span class="nx">dimensions</span><span class="p">(</span><span class="nx">scroller</span><span class="p">)</span></div><div class='line' id='LC101'>				<span class="p">};</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>				<span class="kd">var</span> <span class="nx">rel</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC104'>					<span class="nx">top</span><span class="o">:</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">e</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="p">(</span><span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">border</span><span class="p">.</span><span class="nx">top</span><span class="p">),</span></div><div class='line' id='LC105'>					<span class="nx">bottom</span><span class="o">:</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">-</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">border</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">-</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">scrollbar</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">-</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">e</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">bottom</span><span class="p">,</span></div><div class='line' id='LC106'>					<span class="nx">left</span><span class="o">:</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">e</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="p">(</span><span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">border</span><span class="p">.</span><span class="nx">left</span><span class="p">),</span></div><div class='line' id='LC107'>					<span class="nx">right</span><span class="o">:</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">right</span> <span class="o">-</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">border</span><span class="p">.</span><span class="nx">right</span> <span class="o">-</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">scrollbar</span><span class="p">.</span><span class="nx">right</span> <span class="o">-</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">e</span><span class="p">.</span><span class="nx">rect</span><span class="p">.</span><span class="nx">right</span></div><div class='line' id='LC108'>				<span class="p">};</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>				<span class="kd">var</span> <span class="nx">animOptions</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC111'><br/></div><div class='line' id='LC112'>				<span class="c1">// vertical scroll</span></div><div class='line' id='LC113'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span><span class="p">.</span><span class="nx">y</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC114'>				<span class="p">{</span></div><div class='line' id='LC115'>					<span class="k">if</span> <span class="p">(</span><span class="nx">rel</span><span class="p">.</span><span class="nx">top</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC116'>					<span class="p">{</span></div><div class='line' id='LC117'>						<span class="nx">animOptions</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">scroll</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC118'>					<span class="p">}</span></div><div class='line' id='LC119'>					<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">rel</span><span class="p">.</span><span class="nx">top</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC120'>					<span class="p">{</span></div><div class='line' id='LC121'>						<span class="nx">animOptions</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">scroll</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">rel</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span> <span class="o">-</span><span class="nx">rel</span><span class="p">.</span><span class="nx">bottom</span><span class="p">);</span></div><div class='line' id='LC122'>					<span class="p">}</span></div><div class='line' id='LC123'>				<span class="p">}</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>				<span class="c1">// horizontal scroll</span></div><div class='line' id='LC126'>				<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">direction</span><span class="p">.</span><span class="nx">x</span> <span class="o">===</span> <span class="kc">true</span><span class="p">)</span></div><div class='line' id='LC127'>				<span class="p">{</span></div><div class='line' id='LC128'>					<span class="k">if</span> <span class="p">(</span><span class="nx">rel</span><span class="p">.</span><span class="nx">left</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC129'>					<span class="p">{</span></div><div class='line' id='LC130'>						<span class="nx">animOptions</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">scroll</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span></div><div class='line' id='LC131'>					<span class="p">}</span></div><div class='line' id='LC132'>					<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">rel</span><span class="p">.</span><span class="nx">left</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">rel</span><span class="p">.</span><span class="nx">right</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC133'>					<span class="p">{</span></div><div class='line' id='LC134'>						<span class="nx">animOptions</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">dim</span><span class="p">.</span><span class="nx">s</span><span class="p">.</span><span class="nx">scroll</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="nx">rel</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span> <span class="o">-</span><span class="nx">rel</span><span class="p">.</span><span class="nx">right</span><span class="p">);</span></div><div class='line' id='LC135'>					<span class="p">}</span></div><div class='line' id='LC136'>				<span class="p">}</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>				<span class="c1">// scroll if needed</span></div><div class='line' id='LC139'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">isEmptyObject</span><span class="p">(</span><span class="nx">animOptions</span><span class="p">))</span></div><div class='line' id='LC140'>				<span class="p">{</span></div><div class='line' id='LC141'>					<span class="k">if</span> <span class="p">(</span><span class="nx">rootrx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">scroller</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nodeName</span><span class="p">))</span></div><div class='line' id='LC142'>					<span class="p">{</span></div><div class='line' id='LC143'>						<span class="nx">scroller</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;html,body&quot;</span><span class="p">);</span></div><div class='line' id='LC144'>					<span class="p">}</span></div><div class='line' id='LC145'>					<span class="nx">scroller</span></div><div class='line' id='LC146'>						<span class="p">.</span><span class="nx">animate</span><span class="p">(</span><span class="nx">animOptions</span><span class="p">,</span> <span class="nx">options</span><span class="p">.</span><span class="nx">duration</span><span class="p">)</span></div><div class='line' id='LC147'>						<span class="p">.</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="c1">// we want function to be called just once (ref. &quot;html,body&quot;)</span></div><div class='line' id='LC148'>						<span class="p">.</span><span class="nx">queue</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">next</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC149'>							<span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">scroller</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC150'>							<span class="nx">next</span><span class="p">();</span></div><div class='line' id='LC151'>						<span class="p">});</span></div><div class='line' id='LC152'>				<span class="p">}</span></div><div class='line' id='LC153'>				<span class="k">else</span></div><div class='line' id='LC154'>				<span class="p">{</span></div><div class='line' id='LC155'>					<span class="c1">// when there&#39;s nothing to scroll, just call the &quot;complete&quot; function</span></div><div class='line' id='LC156'>					<span class="nx">$</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">complete</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">scroller</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC157'>				<span class="p">}</span></div><div class='line' id='LC158'>			<span class="p">}</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>			<span class="c1">// return set back</span></div><div class='line' id='LC161'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC162'>		<span class="p">}</span></div><div class='line' id='LC163'>	<span class="p">});</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>	<span class="kd">var</span> <span class="nx">scrollValue</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC166'>		<span class="nx">auto</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC167'>		<span class="nx">scroll</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC168'>		<span class="nx">visible</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC169'>		<span class="nx">hidden</span><span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC170'>	<span class="p">};</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">expr</span><span class="p">[</span><span class="s2">&quot;:&quot;</span><span class="p">],</span> <span class="p">{</span></div><div class='line' id='LC173'>		<span class="nx">scrollable</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">meta</span><span class="p">,</span> <span class="nx">stack</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>			<span class="kd">var</span> <span class="nx">direction</span> <span class="o">=</span> <span class="nx">converter</span><span class="p">[</span><span class="k">typeof</span> <span class="p">(</span><span class="nx">meta</span><span class="p">[</span><span class="mi">3</span><span class="p">])</span> <span class="o">===</span> <span class="s2">&quot;string&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">meta</span><span class="p">[</span><span class="mi">3</span><span class="p">].</span><span class="nx">toLowerCase</span><span class="p">()]</span> <span class="o">||</span> <span class="nx">converter</span><span class="p">.</span><span class="nx">both</span><span class="p">;</span></div><div class='line' id='LC175'>			<span class="kd">var</span> <span class="nx">styles</span> <span class="o">=</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span> <span class="o">&amp;&amp;</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span> <span class="o">?</span> <span class="nb">document</span><span class="p">.</span><span class="nx">defaultView</span><span class="p">.</span><span class="nx">getComputedStyle</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="kc">null</span><span class="p">)</span> <span class="o">:</span> <span class="nx">element</span><span class="p">.</span><span class="nx">currentStyle</span><span class="p">);</span></div><div class='line' id='LC176'>			<span class="kd">var</span> <span class="nx">overflow</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC177'>				<span class="nx">x</span><span class="o">:</span> <span class="nx">scrollValue</span><span class="p">[</span><span class="nx">styles</span><span class="p">.</span><span class="nx">overflowX</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]</span> <span class="o">||</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC178'>				<span class="nx">y</span><span class="o">:</span> <span class="nx">scrollValue</span><span class="p">[</span><span class="nx">styles</span><span class="p">.</span><span class="nx">overflowY</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()]</span> <span class="o">||</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC179'>				<span class="nx">isRoot</span><span class="o">:</span> <span class="nx">rootrx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">)</span></div><div class='line' id='LC180'>			<span class="p">};</span></div><div class='line' id='LC181'><br/></div><div class='line' id='LC182'>			<span class="c1">// check if completely unscrollable (exclude HTML element because it&#39;s special)</span></div><div class='line' id='LC183'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">overflow</span><span class="p">.</span><span class="nx">x</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">overflow</span><span class="p">.</span><span class="nx">y</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">overflow</span><span class="p">.</span><span class="nx">isRoot</span><span class="p">)</span></div><div class='line' id='LC184'>			<span class="p">{</span></div><div class='line' id='LC185'>				<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC186'>			<span class="p">}</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>			<span class="kd">var</span> <span class="nx">size</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC189'>				<span class="nx">height</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC190'>					<span class="nx">scroll</span><span class="o">:</span> <span class="nx">element</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">,</span></div><div class='line' id='LC191'>					<span class="nx">client</span><span class="o">:</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientHeight</span></div><div class='line' id='LC192'>				<span class="p">},</span></div><div class='line' id='LC193'>				<span class="nx">width</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC194'>					<span class="nx">scroll</span><span class="o">:</span> <span class="nx">element</span><span class="p">.</span><span class="nx">scrollWidth</span><span class="p">,</span></div><div class='line' id='LC195'>					<span class="nx">client</span><span class="o">:</span> <span class="nx">element</span><span class="p">.</span><span class="nx">clientWidth</span></div><div class='line' id='LC196'>				<span class="p">},</span></div><div class='line' id='LC197'>				<span class="c1">// check overflow.x/y because iPad (and possibly other tablets) don&#39;t dislay scrollbars</span></div><div class='line' id='LC198'>				<span class="nx">scrollableX</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC199'>					<span class="k">return</span> <span class="p">(</span><span class="nx">overflow</span><span class="p">.</span><span class="nx">x</span> <span class="o">||</span> <span class="nx">overflow</span><span class="p">.</span><span class="nx">isRoot</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">scroll</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">width</span><span class="p">.</span><span class="nx">client</span><span class="p">;</span></div><div class='line' id='LC200'>				<span class="p">},</span></div><div class='line' id='LC201'>				<span class="nx">scrollableY</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC202'>					<span class="k">return</span> <span class="p">(</span><span class="nx">overflow</span><span class="p">.</span><span class="nx">y</span> <span class="o">||</span> <span class="nx">overflow</span><span class="p">.</span><span class="nx">isRoot</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">.</span><span class="nx">scroll</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span><span class="p">.</span><span class="nx">client</span><span class="p">;</span></div><div class='line' id='LC203'>				<span class="p">}</span></div><div class='line' id='LC204'>			<span class="p">};</span></div><div class='line' id='LC205'>			<span class="k">return</span> <span class="nx">direction</span><span class="p">.</span><span class="nx">y</span> <span class="o">&amp;&amp;</span> <span class="nx">size</span><span class="p">.</span><span class="nx">scrollableY</span><span class="p">()</span> <span class="o">||</span> <span class="nx">direction</span><span class="p">.</span><span class="nx">x</span> <span class="o">&amp;&amp;</span> <span class="nx">size</span><span class="p">.</span><span class="nx">scrollableX</span><span class="p">();</span></div><div class='line' id='LC206'>		<span class="p">}</span></div><div class='line' id='LC207'>	<span class="p">});</span></div><div class='line' id='LC208'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.02149s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/litera/jquery-scrollintoview/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>


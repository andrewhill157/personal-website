#!/usr/bin/env python 

import datetime
import argparse
import os
import sys

parser = argparse.ArgumentParser('Generate a markdown file for new blog post.')
parser.add_argument('title', help='Title of post.') 
parser.add_argument('tag', help='Tag to use for post category.')
args = parser.parse_args()

header = \
"""---
title: %s
layout: post
thumbnail:
tags: %s
---
""" % (args.title, args.tag)

date = datetime.datetime.now()
slug = args.title.lower().replace(' ', '-').replace('.', '')
tag_path = os.path.join('blog/_posts', args.tag.lower().replace(' ', '_'))
file_name = os.path.join(tag_path, '%s-%s-%s-%s.md' % (date.year, date.month, date.day, slug))

if os.path.exists(file_name):
    decision = raw_input('A post with this name exists! Do you want to overwrite? ')

    if 'y' not in decision.lower():
        sys.exit(1)
   
if not os.path.exists(tag_path):    
    os.mkdir(tag_path)

with open(file_name, 'w') as f:
    f.write(header)

os.system('open %s' % file_name)






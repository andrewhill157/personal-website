#!/usr/bin/env python 

import datetime
import argparse
import os
import sys

parser = argparse.ArgumentParser('Generate a markdown file for new blog post.')
parser.add_argument('title', help='Title of post.') 
parser.add_argument('tags', help='Tags to use for post.')
parser.add_argument('--images', action='store_true', help='Make a directory for images.')
args = parser.parse_args()

header = \
"""---
title: %s
layout: post
tags: %s
---
""" % (args.title, args.tags)

date = datetime.datetime.now()
slug = args.title.lower().replace(' ', '-').replace('.', '')
posts_path = 'blog/_posts/'
images_path = 'images/posts/'

file_name = os.path.join(posts_path, '%s-%s-%s-%s.md' % (date.year, date.month, date.day, slug))
images_path = os.path.join(images_path, '%s-%s-%s-%s/' % (date.year, date.month, date.day, slug))

if args.images:
    os.mkdir(images_path)

if os.path.exists(file_name):
    decision = raw_input('A post with this name exists! Do you want to overwrite? ')

    if 'y' not in decision.lower():
        sys.exit(1)

with open(file_name, 'w') as f:
    f.write(header)

os.system('open %s' % file_name)






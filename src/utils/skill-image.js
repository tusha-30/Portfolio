import * as adobeXd from '../Images/svg/skills/adobe-xd.svg';
import adobeaudition from '../Images/svg/skills/adobeaudition.svg';
import afterEffects from '../Images/svg/skills/after-effects.svg';
import angular from '../Images/svg/skills/angular.svg';
import aws from '../Images/svg/skills/aws.svg';
import azure from '../Images/svg/skills/azure.svg';
import blender from '../Images/svg/skills/blender.svg';
import bootstrap from '../Images/svg/skills/bootstrap.svg';
import bulma from '../Images/svg/skills/bulma.svg';
import c from '../Images/svg/skills/c.svg';
import canva from '../Images/svg/skills/canva.svg';
import capacitorjs from '../Images/svg/skills/capacitorjs.svg';
import coffeescript from '../Images/svg/skills/coffeescript.svg';
import cplusplus from '../Images/svg/skills/cplusplus.svg';
import csharp from '../Images/svg/skills/csharp.svg';
import css from '../Images/svg/skills/css.svg';
import dart from '../Images/svg/skills/dart.svg';
import deno from '../Images/svg/skills/deno.svg';
import django from '../Images/svg/skills/django.svg';
import docker from '../Images/svg/skills/docker.svg';
import fastify from '../Images/svg/skills/fastify.svg';
import figma from '../Images/svg/skills/figma.svg';
import firebase from '../Images/svg/skills/firebase.svg';
import flutter from '../Images/svg/skills/flutter.svg';
import gcp from '../Images/svg/skills/gcp.svg';
import gimp from '../Images/svg/skills/gimp.svg';
import git from '../Images/svg/skills/git.svg';
import go from '../Images/svg/skills/go.svg';
import graphql from '../Images/svg/skills/graphql.svg';
import haxe from '../Images/svg/skills/haxe.svg';
import html from '../Images/svg/skills/html.svg';
import illustrator from '../Images/svg/skills/illustrator.svg';
import ionic from '../Images/svg/skills/ionic.svg';
import java from '../Images/svg/skills/java.svg';
import javascript from '../Images/svg/skills/javascript.svg';
import julia from '../Images/svg/skills/julia.svg';
import kotlin from '../Images/svg/skills/kotlin.svg';
import lightroom from '../Images/svg/skills/lightroom.svg';
import markdown from '../Images/svg/skills/markdown.svg';
import materialui from '../Images/svg/skills/materialui.svg';
import matlab from '../Images/svg/skills/matlab.svg';
import memsql from '../Images/svg/skills/memsql.svg';
import microsoftoffice from '../Images/svg/skills/microsoftoffice.svg';
import mongoDB from '../Images/svg/skills/mongoDB.svg';
import mysql from '../Images/svg/skills/mysql.svg';
import nextJS from '../Images/svg/skills/nextJS.svg';
import nginx from '../Images/svg/skills/nginx.svg';
import numpy from '../Images/svg/skills/numpy.svg';
import nuxtJS from '../Images/svg/skills/nuxtJS.svg';
import opencv from '../Images/svg/skills/opencv.svg';
import photoshop from '../Images/svg/skills/photoshop.svg';
import php from '../Images/svg/skills/php.svg';
import picsart from '../Images/svg/skills/picsart.svg';
import postgresql from '../Images/svg/skills/postgresql.svg';
import premierepro from '../Images/svg/skills/premierepro.svg';
import python from '../Images/svg/skills/python.svg';
import pytorch from '../Images/svg/skills/pytorch.svg';
import react from '../Images/svg/skills/react.svg';
import ruby from '../Images/svg/skills/ruby.svg';
import selenium from '../Images/svg/skills/selenium.svg';
import sketch from '../Images/svg/skills/sketch.svg';
import strapi from '../Images/svg/skills/strapi.svg';
import svelte from '../Images/svg/skills/svelte.svg';
import swift from '../Images/svg/skills/swift.svg';
import tailwind from '../Images/svg/skills/tailwind.svg';
import tensorflow from '../Images/svg/skills/tensorflow.svg';
import typescript from '../Images/svg/skills/typescript.svg';
import unity from '../Images/svg/skills/unity.svg';
import vitejs from '../Images/svg/skills/vitejs.svg';
import vue from '../Images/svg/skills/vue.svg';
import vuetifyjs from '../Images/svg/skills/vuetifyjs.svg';
import webix from '../Images/svg/skills/webix.svg';
import wolframalpha from '../Images/svg/skills/wolframalpha.svg';
import wordpress from '../Images/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}

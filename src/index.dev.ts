// vendor imports
import 'angular'
import '@angular/router/angular1/angular_1_router'
import 'angular-material'
import 'LogUnobtrusiveExtension/dist/log-ex-unobtrusive'
import 'ng-stats'

// app imports
import Common from './common/common.ts'
import Components from './components/components.ts'

import {App} from './app.ts'
import AppConfig from './app.config.ts'

// app css
import './app.scss'

// top level angular module for app
angular.module('app', [
  'ngComponentRouter',
  'ngMaterial',
  'log.ex.uo',
  'angularStats',
  Common.name,
  Components.name,
])
.config(AppConfig)
.value('$routerRootComponent', 'app') // top level router component, contains the intial routes and views
.component('app', new App())

// start angular using code instead of ng-app declaration in the index.html
angular.bootstrap(document, ['app'], {
    strictDi: true
})

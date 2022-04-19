import './style/main.sass'
import {buildTemplates} from './app/buildTemplates/buildTemplates.js'
import {controller} from './app/appScripts/controller.js'
import {setEventsOnInit} from './app/appScripts/events.js'

buildTemplates()
setEventsOnInit()

const addTaskBtn = document.querySelector('.add-task');
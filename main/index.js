import {  registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from "qiankun"
import render from './render/ReactRender';
//import render from './render/VueRender';

render({loading:true});
const loader = loading => render({loading});

process.env.nardo = '//localhost:7002'
var path = process.env.nardo;
console.log(path);
registerMicroApps([
    {
        name: 'react',
        entry: '//localhost:3000',
        container: '#subapp-viewport',
        loader,
        activeRule: '/Definitelyt',
    },
    {
        name: 'vue',
        entry: path,
        container: '#subapp-viewport',
        loader,
        activeRule: '/Definitely-not-vue',
    },
    {
        name: 'html',
        entry: '//localhost:7003',
        container: '#subapp-viewport',
        loader,
        activeRule: '/angular',
    }
    
],
{
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun',
  });
  
  onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));
  
  setGlobalState({
    ignore: 'master',
    user: {
      name: 'master',
    },
  });



var path = "/nardo"

setDefaultMountApp(path);

start();
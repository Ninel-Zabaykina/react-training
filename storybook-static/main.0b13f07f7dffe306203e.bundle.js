(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1262:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1263)},1301:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(286);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1302)],module)}.call(this,__webpack_require__(440)(module))},1302:function(module,exports,__webpack_require__){var map={"./components/Message.stories.js":1303,"./components/MessageForm.stories.js":1336,"./components/MessagesList.stories.js":1338,"./stories/0-Welcome.stories.js":1326,"./stories/1-Button.stories.js":1333};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1302},1303:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ShowText",(function(){return ShowText}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Message__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(104),__webpack_require__(148)),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(198),addSourceDecorator=(__webpack_require__(63).withSource,__webpack_require__(63).addSource);__webpack_exports__.default={parameters:{storySource:{source:'import React from \'react\';\nimport { action } from \'@storybook/addon-actions\';\nimport Message from \'./Message\';\nimport { withKnobs, text, boolean, number } from "@storybook/addon-knobs";\n\nexport default {\n    title: \'Message\',\n    component: Message,\n    decorators: [withKnobs]\n};\n\nconst message = {\n    nick: text("Nickname", "Nobody"),\n    message: text("Message", "Hello everybody!")\n};\n\nexport const ShowText = () => {\n    return <Message message={message}/>;\n};',locationsMap:{"message--show-text":{startLoc:{col:24,line:17},endLoc:{col:1,line:19},startBody:{col:24,line:17},endBody:{col:1,line:19}}}}},title:"Message",component:_Message__WEBPACK_IMPORTED_MODULE_2__.a,decorators:[_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs]};var message={nick:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Nickname","Nobody"),message:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Message","Hello everybody!")},_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_2__.a,{message:message}),ShowText=addSourceDecorator((function(){return _ref}),{__STORY__:'import React from \'react\';\nimport { action } from \'@storybook/addon-actions\';\nimport Message from \'./Message\';\nimport { withKnobs, text, boolean, number } from "@storybook/addon-knobs";\n\nexport default {\n    title: \'Message\',\n    component: Message,\n    decorators: [withKnobs]\n};\n\nconst message = {\n    nick: text("Nickname", "Nobody"),\n    message: text("Message", "Hello everybody!")\n};\n\nexport const ShowText = () => {\n    return <Message message={message}/>;\n};',__ADDS_MAP__:{"message--show-text":{startLoc:{col:24,line:17},endLoc:{col:1,line:19},startBody:{col:24,line:17},endBody:{col:1,line:19}}},__MAIN_FILE_LOCATION__:"/Message.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/dmw/projects/react-training/src/components",__IDS_TO_FRAMEWORKS__:{}})},1326:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(461),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(105),addSourceDecorator=(__webpack_require__(63).withSource,__webpack_require__(63).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { linkTo } from '@storybook/addon-links';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n  component: Welcome,\n};\n\nexport const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;\n\nToStorybook.story = {\n  name: 'to Storybook',\n};\n",locationsMap:{"welcome--to-storybook":{startLoc:{col:27,line:10},endLoc:{col:71,line:10},startBody:{col:27,line:10},endBody:{col:71,line:10}}}}},title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome};var ToStorybook=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})}),{__STORY__:"import React from 'react';\nimport { linkTo } from '@storybook/addon-links';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n  component: Welcome,\n};\n\nexport const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;\n\nToStorybook.story = {\n  name: 'to Storybook',\n};\n",__ADDS_MAP__:{"welcome--to-storybook":{startLoc:{col:27,line:10},endLoc:{col:71,line:10},startBody:{col:27,line:10},endBody:{col:71,line:10}}},__MAIN_FILE_LOCATION__:"/0-Welcome.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/dmw/projects/react-training/src/stories",__IDS_TO_FRAMEWORKS__:{}});ToStorybook.story={name:"to Storybook"}},1333:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(104),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(105),addSourceDecorator=(__webpack_require__(63).withSource,__webpack_require__(63).addSource),__STORY__="import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { Button } from '@storybook/react/demo';\n\nexport default {\n  title: 'Button',\n  component: Button,\n};\n\nexport const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;\n\nexport const Emoji = () => (\n  <Button onClick={action('clicked')}>\n    <span role=\"img\" aria-label=\"so cool\">\n      😀 😎 👍 💯\n    </span>\n  </Button>\n);\n",__ADDS_MAP__={"button--text":{startLoc:{col:20,line:10},endLoc:{col:83,line:10},startBody:{col:20,line:10},endBody:{col:83,line:10}},"button--emoji":{startLoc:{col:21,line:12},endLoc:{col:1,line:18},startBody:{col:21,line:12},endBody:{col:1,line:18}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { Button } from '@storybook/react/demo';\n\nexport default {\n  title: 'Button',\n  component: Button,\n};\n\nexport const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;\n\nexport const Emoji = () => (\n  <Button onClick={action('clicked')}>\n    <span role=\"img\" aria-label=\"so cool\">\n      😀 😎 👍 💯\n    </span>\n  </Button>\n);\n",locationsMap:{"button--text":{startLoc:{col:20,line:10},endLoc:{col:83,line:10},startBody:{col:20,line:10},endBody:{col:83,line:10}},"button--emoji":{startLoc:{col:21,line:12},endLoc:{col:1,line:18},startBody:{col:21,line:12},endBody:{col:1,line:18}}}}},title:"Button",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button};var Text=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/Users/dmw/projects/react-training/src/stories",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),Emoji=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},_ref)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-Button.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/Users/dmw/projects/react-training/src/stories",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},1336:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist=__webpack_require__(104),classCallCheck=__webpack_require__(456),createClass=__webpack_require__(457),possibleConstructorReturn=__webpack_require__(463),getPrototypeOf=__webpack_require__(458),inherits=__webpack_require__(464),es=__webpack_require__(196),toConsumableArray=(__webpack_require__(20),__webpack_require__(462)),objectSpread2=__webpack_require__(294),redux=__webpack_require__(149),redux_thunk_es=__webpack_require__(460),browser_ponyfill=__webpack_require__(293),browser_ponyfill_default=__webpack_require__.n(browser_ponyfill),apiUrl="http://localhost:3001";var initialState={messages:[]},_ref=(Object(redux.c)((function(){var state=0<arguments.length&&void 0!==arguments[0]?arguments[0]:initialState,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case"addMessage":return Object(objectSpread2.a)({},state,{messages:[].concat(Object(toConsumableArray.a)(state.messages),[action.message])});case"updateMessages":return Object(objectSpread2.a)({},state,{messages:action.messages});default:return state}}),Object(redux.a)(redux_thunk_es.a)),react_default.a.createElement("br",null)),_ref2=react_default.a.createElement("br",null),MessageForm_MessageForm=function(_React$Component){function MessageForm(props){var _this;return Object(classCallCheck.a)(this,MessageForm),(_this=Object(possibleConstructorReturn.a)(this,Object(getPrototypeOf.a)(MessageForm).call(this,props))).state={message:"",nick:""},_this}return Object(inherits.a)(MessageForm,_React$Component),Object(createClass.a)(MessageForm,[{key:"sendMessage",value:function sendMessage(){this.props.dispatch(function store_sendMessage(data){return function(dispatch){return browser_ponyfill_default()(apiUrl,{method:"POST",body:JSON.stringify(data)}).then((function(){return dispatch(function pushMessage(message){return{type:"addMessage",message:message}}(data))}))}}({message:this.state.message,nick:this.state.nick})),this.setState({message:""})}},{key:"render",value:function render(){var _this2=this;return react_default.a.createElement("form",null,react_default.a.createElement("input",{value:this.state.nick,type:"text","aria-label":"nick-input",onChange:function onChange(event){return _this2.setState({nick:event.target.value})}}),_ref,react_default.a.createElement("textarea",{value:this.state.message,"aria-label":"message-input",onChange:function onChange(event){return _this2.setState({message:event.target.value})}}),_ref2,react_default.a.createElement("input",{type:"button",value:"Send","aria-label":"send-button",onClick:function onClick(){return _this2.sendMessage()}}))}}]),MessageForm}(react_default.a.Component);MessageForm_MessageForm.displayName="MessageForm",MessageForm_MessageForm.__docgenInfo={description:"",methods:[{name:"sendMessage",docblock:null,modifiers:[],params:[],returns:null}],displayName:"MessageForm"};Object(es.a)()(MessageForm_MessageForm);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MessageForm.js"]={name:"MessageForm",docgenInfo:MessageForm_MessageForm.__docgenInfo,path:"src/components/MessageForm.js"}),__webpack_require__.d(__webpack_exports__,"ShowForm",(function(){return ShowForm}));__webpack_require__(63).withSource;var addSourceDecorator=__webpack_require__(63).addSource,ShowForm=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { MessageForm } from './MessageForm';\n\nexport default {\n    title: 'MessageForm',\n    component: MessageForm,\n};\n\nexport const ShowForm = () => {\n    const props = {\n        dispatch: action(\"Dispatch called\")\n    };\n    return <MessageForm {...props}/>;\n};",locationsMap:{"messageform--show-form":{startLoc:{col:24,line:10},endLoc:{col:1,line:15},startBody:{col:24,line:10},endBody:{col:1,line:15}}}}},title:"MessageForm",component:MessageForm_MessageForm},addSourceDecorator((function(){var props={dispatch:Object(dist.action)("Dispatch called")};return react_default.a.createElement(MessageForm_MessageForm,props)}),{__STORY__:"import React from 'react';\nimport { action } from '@storybook/addon-actions';\nimport { MessageForm } from './MessageForm';\n\nexport default {\n    title: 'MessageForm',\n    component: MessageForm,\n};\n\nexport const ShowForm = () => {\n    const props = {\n        dispatch: action(\"Dispatch called\")\n    };\n    return <MessageForm {...props}/>;\n};",__ADDS_MAP__:{"messageform--show-form":{startLoc:{col:24,line:10},endLoc:{col:1,line:15},startBody:{col:24,line:10},endBody:{col:1,line:15}}},__MAIN_FILE_LOCATION__:"/MessageForm.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/Users/dmw/projects/react-training/src/components",__IDS_TO_FRAMEWORKS__:{}}))},1338:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),es=(__webpack_require__(104),__webpack_require__(10),__webpack_require__(196)),Message=__webpack_require__(148);function MessagesList(props){return react_default.a.createElement("div",null,react_default.a.createElement("ul",null,props.messages.map((function(item,index){return react_default.a.createElement(Message.a,{message:item,key:index})}))),react_default.a.createElement("span",{"data-testid":"total-messages"},"Total messages: ",props.messagesCount))}MessagesList.displayName="MessagesList",MessagesList.__docgenInfo={description:"",methods:[],displayName:"MessagesList"};Object(es.a)((function mapStateToProps(state){var messages=state.messages;return{messages:messages,messagesCount:messages.length}}))(MessagesList);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MessagesList.js"]={name:"MessagesList",docgenInfo:MessagesList.__docgenInfo,path:"src/components/MessagesList.js"}),__webpack_require__.d(__webpack_exports__,"ShowList",(function(){return ShowList})),__webpack_require__.d(__webpack_exports__,"ShowEmptyList",(function(){return ShowEmptyList}));__webpack_require__(63).withSource;var addSourceDecorator=__webpack_require__(63).addSource,__STORY__='import React from \'react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { MessagesList } from \'./MessagesList\';\n\nexport default {\n    title: \'MessagesList\',\n    component: MessagesList,\n};\n\nexport const ShowList = () => {\n    const messages = [\n        {\n            nick: "Nobody",\n            message: "Hello everybody!"\n        },\n        {\n            nick: "Nobody",\n            message: "Hello everybody!"\n        },\n        {\n            nick: "Nobody",\n            message: "Hello everybody!"\n        }\n    ];\n    const props = {\n        messages,\n        messagesCount: messages.length\n    };\n    return <MessagesList {...props}/>;\n};\n\nexport const ShowEmptyList = () => {\n    const messages = [];\n    const props = {\n        messages,\n        messagesCount: messages.length\n    };\n    return <MessagesList {...props}/>;\n};',__ADDS_MAP__={"messageslist--show-list":{startLoc:{col:24,line:10},endLoc:{col:1,line:30},startBody:{col:24,line:10},endBody:{col:1,line:30}},"messageslist--show-empty-list":{startLoc:{col:29,line:32},endLoc:{col:1,line:39},startBody:{col:29,line:32},endBody:{col:1,line:39}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={},ShowList=(__webpack_exports__.default={parameters:{storySource:{source:'import React from \'react\';\nimport { action } from \'@storybook/addon-actions\';\nimport { MessagesList } from \'./MessagesList\';\n\nexport default {\n    title: \'MessagesList\',\n    component: MessagesList,\n};\n\nexport const ShowList = () => {\n    const messages = [\n        {\n            nick: "Nobody",\n            message: "Hello everybody!"\n        },\n        {\n            nick: "Nobody",\n            message: "Hello everybody!"\n        },\n        {\n            nick: "Nobody",\n            message: "Hello everybody!"\n        }\n    ];\n    const props = {\n        messages,\n        messagesCount: messages.length\n    };\n    return <MessagesList {...props}/>;\n};\n\nexport const ShowEmptyList = () => {\n    const messages = [];\n    const props = {\n        messages,\n        messagesCount: messages.length\n    };\n    return <MessagesList {...props}/>;\n};',locationsMap:{"messageslist--show-list":{startLoc:{col:24,line:10},endLoc:{col:1,line:30},startBody:{col:24,line:10},endBody:{col:1,line:30}},"messageslist--show-empty-list":{startLoc:{col:29,line:32},endLoc:{col:1,line:39},startBody:{col:29,line:32},endBody:{col:1,line:39}}}}},title:"MessagesList",component:MessagesList},addSourceDecorator((function(){var messages=[{nick:"Nobody",message:"Hello everybody!"},{nick:"Nobody",message:"Hello everybody!"},{nick:"Nobody",message:"Hello everybody!"}],props={messages:messages,messagesCount:messages.length};return react_default.a.createElement(MessagesList,props)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MessagesList.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/Users/dmw/projects/react-training/src/components",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})),ShowEmptyList=addSourceDecorator((function(){var messages=[],props={messages:messages,messagesCount:messages.length};return react_default.a.createElement(MessagesList,props)}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/MessagesList.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:"/Users/dmw/projects/react-training/src/components",__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},148:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),Message=function(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{"data-testid":"message"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,props.message.nick,":")," ",_ref," ",props.message.message)};Message.displayName="Message",Message.defaultProps={message:null},Message.__docgenInfo={description:"Use `Message` to display chat messages",methods:[],displayName:"Message",props:{message:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{nick:{name:"string",required:!1},message:{name:"string",required:!1}}},required:!1,description:""}}},__webpack_exports__.a=Message,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Message.js"]={name:"Message",docgenInfo:Message.__docgenInfo,path:"src/components/Message.js"})},465:function(module,exports,__webpack_require__){__webpack_require__(466),__webpack_require__(609),__webpack_require__(610),__webpack_require__(1261),__webpack_require__(1262),module.exports=__webpack_require__(1301)},528:function(module,exports){}},[[465,1,2]]]);
//# sourceMappingURL=main.0b13f07f7dffe306203e.bundle.js.map
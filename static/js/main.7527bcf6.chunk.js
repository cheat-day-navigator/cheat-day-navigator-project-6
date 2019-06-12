(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(91)},52:function(e,t,a){},53:function(e,t,a){},83:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),l=a.n(i),s=(a(52),a(6)),o=a(7),c=a(9),u=a(8),d=a(10),m=(a(53),a(15)),p=a.n(m),h=a(17),v=a.n(h);v.a.initializeApp({apiKey:"AIzaSyCKqCQ2bnxrqZ267e6kBbkitweRVisybKA",authDomain:"superfoods-navigator-project-6.firebaseapp.com",databaseURL:"https://superfoods-navigator-project-6.firebaseio.com",projectId:"superfoods-navigator-project-6",storageBucket:"superfoods-navigator-project-6.appspot.com",messagingSenderId:"72580584215",appId:"1:72580584215:web:f2caafd0f0ae81e1"});var f=v.a,g=a(43),b=a.n(g),E={appKey:"aca04b0312df7f5382fe783ade15b363",appId:"b3b57eaf"},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"simpleSearch",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"chicken nuggets",a=E.appKey,n=E.appId,r="",i={};return"macroNutrients"===e?r="https://trackapi.nutritionix.com/v2/utils/nutrients":"simpleSearch"===e?(r="https://trackapi.nutritionix.com/v2/search/instant",i={query:t,detailed:!0}):"readMore"===e?(r="https://trackapi.nutritionix.com/v2/search/item",i={ntx_item_id:t}):console.log("Invalid or missing searchtype prop. Make sure your first prop when using MakeCall() is either 'macroNutrients', 'simpleSearch', or 'readMore'!"),b()({method:"GET",url:r,dataResponse:"json",headers:{"x-app-id":n,"x-app-key":a},params:i}).then(function(e){return e.data}).catch(function(e){var t;console.log(e),t="Something went wrong on our end! Please wait a moment, and try your search again!",p.a.fire({title:"Oops!",text:t,type:"error",confirmButtonText:"Okay"})})},k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleKeyPress=function(t){13===t.which&&e.handleClick(t)},e.handleChange=function(t){e.setState({userInput:t.target.value})},e.clearForm=function(){document.getElementById("main-form").reset()},e.handleClick=function(t){t.preventDefault(),e.props.loading(!0),f.database().ref("searchresults/").push(e.state.userInput),_("simpleSearch",e.state.userInput).then(function(t){var a=t;if(!(a.common.length>0))return e.clearForm(),e.props.loading(!1),p.a.fire({title:"Oops!",text:"We can't find that food! Try something else!",type:"error",confirmButtonText:"Okay"});e.setState({data:a},function(){e.props.toggleCard()}),e.props.data(a)}).then(function(){setTimeout(function(){e.props.loading(!1)},3e3)})},e.state={data:{},userInput:""},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{id:"main-form"},r.a.createElement("label",{htmlFor:"search"},"Look up your favourite foods and find the nutrient information!"),r.a.createElement("input",{type:"text",id:"search",placeholder:"e.g. Chicken nuggets",onChange:this.handleChange,onKeyDown:this.handleKeyPress}),this.state.showSecondInput?r.a.createElement("input",{type:"text",id:"compare",placeholder:"e.g.  Pork chops",onChange:this.handleChange,onKeyDown:this.handleKeyPress}):null,r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"submit",onClick:this.handleClick},"Submit")))}}]),t}(n.Component),N=a(21),C=a(16),I=a(20),S=function(e){return r.a.createElement("ul",null,e.links&&e.links.map(function(t){return r.a.createElement("li",{onClick:e.handleClick},r.a.createElement(I.b,{to:"/".concat(t.tag_id)},t.food_name))}))},y=(a(83),function(){return r.a.createElement("div",{className:"modal-loading"},r.a.createElement("div",{className:"container-loading"},r.a.createElement("div",{className:"bars-loading"},r.a.createElement("div",{className:"bar-loading bar1-loading"}),r.a.createElement("div",{className:"bar-loading bar2-loading"}),r.a.createElement("div",{className:"bar-loading bar3-loading"}),r.a.createElement("div",{className:"bar-loading bar4-loading"}),r.a.createElement("div",{className:"bar-loading bar5-loading"}),r.a.createElement("div",{className:"bar-loading bar6-loading"}),r.a.createElement("div",{className:"bar-loading bar7-loading"}),r.a.createElement("div",{className:"bar-loading bar8-loading"}),r.a.createElement("div",{className:"bar-loading bar9-loading"}),r.a.createElement("div",{className:"bar-loading bar10-loading"}),r.a.createElement("div",{className:"bar-loading bar11-loading"}),r.a.createElement("div",{className:"bar-loading bar12-loading"}),r.a.createElement("div",{className:"bar-loading bar13-loading"}),r.a.createElement("div",{className:"bar-loading bar14-loading"}),r.a.createElement("div",{className:"bar-loading bar15-loading"})),r.a.createElement("p",{className:"text-loading"},"Loading ",r.a.createElement("span",{className:"dot-loading dot1-loading"},". "),r.a.createElement("span",{className:"dot-loading dot2-loading"},". "),r.a.createElement("span",{className:"dot-loading dot3-loading"},"."))))}),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={nutrientValues:[{attr_id:208},{attr_id:204},{attr_id:205},{attr_id:269},{attr_id:318},{attr_id:324},{attr_id:415},{attr_id:401},{attr_id:323},{attr_id:304},{attr_id:309},{attr_id:303}],loading:!1,nutrients:[],dataLoaded:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),_("macroNutrients").then(function(t){var a=e.extractNutrients(t);console.log("data loaded",a),e.setState({nutrients:a,loading:!1,dataLoaded:!0})}).catch(function(t){return console.log(t),e.setState({loading:!1}),p.a.fire({title:"Uh oh!",text:"Something happened on our end! Please try reloading!",type:"error",confirmButtonText:"Okay"})})}},{key:"extractNutrients",value:function(e){var t=this,a=[];console.log("macronutrientS",e);for(var n=function(n){var r=t.state.nutrientValues[n].attr_id;console.log(r,"nutrient id");var i=e.find(function(e){return e.attr_id===r});console.log("macronutrient",i),a.push({attr_id:i.attr_id,usda_nutr_desc:i.usda_nutr_desc,unit:i.unit})},r=0;r<this.state.nutrientValues.length;r++)n(r);return a}},{key:"render",value:function(){var e=this;if(!1===this.state.dataLoaded)return console.log("no data rendering empty"),null;var t=[];return this.state.nutrients.forEach(function(a){var n=e.props.item.full_nutrients.find(function(e){return e.attr_id===a.attr_id});n&&t.push({value:n.value,unit:a.unit,description:a.usda_nutr_desc})}),console.table(t),r.a.createElement("div",{className:"show-selected"},!0===this.state.loading?r.a.createElement(y,null):null,r.a.createElement("div",{className:"card-info"},r.a.createElement("div",{className:"item-info"},r.a.createElement("img",{src:this.props.item&&this.props.item.photo.thumb,alt:""}),r.a.createElement("div",{className:"nutrition-card"},r.a.createElement("h2",null,this.props.item&&this.props.item.tag_name),r.a.createElement("h3",null,"Nutrition Facts"),r.a.createElement("p",{className:"line"},this.props.item&&this.props.item.serving_qty," ",this.props.item&&this.props.item.serving_unit),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",null,r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.value.toFixed(2)," ",e.unit))}))))))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).openCompare=function(){a.setState({compareOpen:!a.state.compareOpen})},a.handleClick=a.handleClick.bind(Object(N.a)(a)),a.handleOutsideClick=a.handleOutsideClick.bind(Object(N.a)(a)),a.state={listOpen:!1,compareOpen:!1},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("comparedItems/").on("value",function(t){var a=[],n=t.val();for(var r in n)a.push(n[r]);e.setState({comparedItems:a})})}},{key:"handleClick",value:function(){this.state.listOpen?document.removeEventListener("click",this.handleOutsideClick,!1):document.addEventListener("click",this.handleOutsideClick,!1),this.setState(function(e){return{listOpen:!e.listOpen}})}},{key:"handleOutsideClick",value:function(e){this.node.contains(e.target)||this.handleClick()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:function(t){e.node=t}},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement("button",{className:"compare-btn btn",onClick:this.openCompare},"Compare List"),r.a.createElement("div",{className:"counter"},r.a.createElement("p",null,this.state.comparedItems&&this.state.comparedItems.length))),this.state.compareOpen?r.a.createElement("ul",{className:"drop-down compared-items"},this.state.comparedItems.map(function(e){return r.a.createElement("li",null,e.tag_name)}),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.props.onCompareClick,className:"compare-btn2"},"Compare!"))):null,r.a.createElement("li",null,r.a.createElement("button",{className:"save-btn btn",onClick:this.handleClick},"Saved Items"),r.a.createElement("div",{className:"counter"},r.a.createElement("p",null,this.props.savedItems&&this.props.savedItems.length))),this.state.listOpen?r.a.createElement("ul",{className:"drop-down saved-items"},r.a.createElement(C.a,{path:"/",render:function(){return r.a.createElement(S,{links:e.props.savedItems,handleClick:e.handleClick})}})):null))}}]),t}(n.Component),w=function(e){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("h4",null,r.a.createElement("a",{href:""},"Superfood Navigation")),r.a.createElement(D,{callback:function(t){e.callbackHell(t)},onCompareClick:e.onCompareClick,compareList:e.compareList,savedItems:e.savedItems})),r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",null,"Superfood Navigation")))},j=a(46),V=(a(89),function(e){return e.detailed?r.a.createElement(r.a.Fragment,null,r.a.createElement(j.Carousel,{showThumbs:!1,className:"carousel-results",swipeable:!1,useKeyboardArrows:!0},e.commonData&&e.commonData.map(function(t,a){var n=e.nutrientValues.map(function(e){return t.full_nutrients.find(function(t){return t.attr_id===e.attr_id})});return r.a.createElement("div",{className:"carousel-results"},r.a.createElement("div",{className:"card-info"},r.a.createElement("div",{className:"item-card",key:"".concat(t.tag_id,"-").concat(a)},r.a.createElement("img",{src:t.photo.thumb,alt:""}),r.a.createElement("div",{className:"nutrition-card"},r.a.createElement("h2",null,t&&t.tag_name),r.a.createElement("h3",null,"Nutrition Facts"),r.a.createElement("p",{className:"line"},t&&t.serving_qty," ",t&&t.serving_unit),r.a.createElement("ul",null,n.map(function(t,a){return void 0===t?null:r.a.createElement("li",null,r.a.createElement("p",null,e.nutrientValues[a].usda_nutr_desc),r.a.createElement("p",null,t.value.toFixed(2)," ",e.nutrientValues[a].unit))}))),r.a.createElement("button",{onClick:e.handleSaveItem,className:"save-item-btn",id:a,value:t.tag_name,"data-id":e.generateFirebaseId(t.tag_name)},e.checkDuplicates(t.tag_name)?"Unsave Item":"Save Item"),r.a.createElement("button",{className:"compare-btn",onClick:e.addToCompare,id:a,value:t.tag_name},"Add to Compare List"))))})),r.a.createElement("button",{onClick:e.readMoreToggle},"Fewer details")):null}),L=function(e){return void 0!==e.commonData?r.a.createElement("div",{className:"simple-results"},e.commonData&&e.commonData.map(function(t,a){var n=e.nutrientValues.map(function(e){return t.full_nutrients.find(function(t){return t.attr_id===e.attr_id})});return r.a.createElement("div",{className:"result-list",key:"".concat(t.tag_id,"-").concat(a)},r.a.createElement("div",{className:"item-header"},r.a.createElement("h2",null,t&&t.tag_name),r.a.createElement("p",{className:"line"},t&&t.serving_qty," (",t&&t.serving_unit,")"),r.a.createElement("div",{className:"thumb-container"},r.a.createElement("img",{src:t.photo.thumb,alt:""}))),r.a.createElement("div",{className:"nutrition-card-simple"},r.a.createElement("h3",null,"Nutrition Facts"),r.a.createElement("ul",null,n.map(function(t,a){return void 0===t?null:r.a.createElement("li",null,r.a.createElement("p",null,e.nutrientValues[a].usda_nutr_desc),r.a.createElement("p",null,t.value.toFixed(2)," ",e.nutrientValues[a].unit))}))),r.a.createElement("div",{className:"buttons-searched"},r.a.createElement("button",{onClick:e.handleSaveItem,className:"save-item-btn",id:a,value:t.tag_name,"data-id":e.generateFirebaseId(t.tag_name)},e.checkDuplicates(t.tag_name)?"Unsave Item":"Save Item"),r.a.createElement("button",{className:"compare-btn",onClick:e.addToCompare,id:a,value:t.tag_name},"Add to Compare List")))})):null},x=(a(90),function(e){return e.detailed?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{commonData:e.commonData,nutrientValues:e.nutrientValues,handleSaveItem:e.handleSaveItem,generateFirebaseId:e.generateFirebaseId,checkDuplicates:e.checkDuplicates,addToCompare:e.addToCompare,detailed:e.detailed}),r.a.createElement("button",{onClick:e.readMoreToggle},"More details"))}),F=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).readMoreToggle=function(){!0===e.state.detailed?e.setState({detailed:!1}):e.setState({detailed:!0})},e.retrieveFirebase=function(){f.database().ref("savedItems/").on("value",function(t){var a=[],n=t.val();for(var r in n)a.push({name:n[r].tag_name,firebaseId:r});e.setState({itemList:a})})},e.checkDuplicates=function(t){if(e.state.itemList.map(function(e){return e.name}).indexOf(t)>-1)return!0},e.generateFirebaseId=function(t){var a=e.state.itemList.map(function(e){return e.name}).indexOf(t);if(a>-1)return e.state.itemList[a].firebaseId},e.retrieveCompareList=function(){f.database().ref("comparedItems/").on("value",function(t){var a=[],n=t.val();for(var r in n)a.push({data:n[r]});e.setState({compareList:a})})},e.addToCompare=function(t){t.preventDefault();var a=t.target.id,n=f.database().ref("comparedItems/");e.state.compareList.length<2?n.push(e.props.commonData[a]):(n.remove(),n.push(e.props.commonData[a]))},e.handleSaveItem=function(t){t.preventDefault();var a=t.target.id,n=t.target.value;e.checkDuplicates(n)?f.database().ref("savedItems/".concat([t.target.dataset.id])).remove():f.database().ref("savedItems/").push(e.props.commonData[a])},e.state={nutrientValues:[{attr_id:208},{attr_id:205},{attr_id:204},{attr_id:203},{attr_id:307},{attr_id:269},{attr_id:301},{attr_id:318},{attr_id:415},{attr_id:401},{attr_id:324},{attr_id:323},{attr_id:303},{attr_id:304},{attr_id:309}],nutrientValuesSimple:[{attr_id:318},{attr_id:415},{attr_id:401},{attr_id:324},{attr_id:323},{attr_id:303},{attr_id:304},{attr_id:309}],itemList:[],compareList:[],detailed:!1},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.retrieveFirebase();for(var t,a=function(t){return e.props.nutrients.find(function(e){return e.attr_id===t})},n=[],r=0;r<this.state.nutrientValues.length;r++)t=a(this.state.nutrientValues[r].attr_id),n[r]={attr_id:t.attr_id,usda_nutr_desc:t.usda_nutr_desc,unit:t.unit};for(var i=[],l=0;l<this.state.nutrientValuesSimple.length;l++)t=a(this.state.nutrientValuesSimple[l].attr_id),i[l]={attr_id:t.attr_id,usda_nutr_desc:t.usda_nutr_desc,unit:t.unit};this.setState({nutrientValues:n,nutrientValuesSimple:i}),this.retrieveCompareList()}},{key:"render",value:function(){return r.a.createElement("div",{className:"gallery-field"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(x,{commonData:this.props.commonData,nutrientValues:this.state.nutrientValuesSimple,handleSaveItem:this.handleSaveItem,generateFirebaseId:this.generateFirebaseId,checkDuplicates:this.checkDuplicates,addToCompare:this.addToCompare,readMoreToggle:this.readMoreToggle,detailed:this.state.detailed}),r.a.createElement(V,{commonData:this.props.commonData,nutrientValues:this.state.nutrientValues,handleSaveItem:this.handleSaveItem,generateFirebaseId:this.generateFirebaseId,checkDuplicates:this.checkDuplicates,addToCompare:this.addToCompare,readMoreToggle:this.readMoreToggle,detailed:this.state.detailed})))}}]),t}(n.Component),T=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Made by ",r.a.createElement("a",{target:"_blank",href:"http://indercodes.com",rel:"noopener noreferrer"},"Inder"),", ",r.a.createElement("a",{target:"_blank",href:"https://chitracodes.com/",rel:"noopener noreferrer"},"Chitra"),", ",r.a.createElement("a",{target:"_blank",href:"http://lintbox.com",rel:"noopener noreferrer"},"Paul"),", and ",r.a.createElement("a",{target:"_blank",href:"http://katbosnic.com",rel:"noopener noreferrer"},"Kat")," using the ",r.a.createElement("a",{target:"_blank",href:"https://developer.nutritionix.com/",rel:"noopener noreferrer"},"Nutrionix API")))},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={nutrientValues:[{attr_id:208},{attr_id:204},{attr_id:205},{attr_id:269},{attr_id:318},{attr_id:324},{attr_id:415},{attr_id:401},{attr_id:323},{attr_id:304},{attr_id:309},{attr_id:303}],newList:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];this.props.compareList.forEach(function(e){t.push(e)}),this.setState({newList:t});for(var a,n=function(t){return e.props.nutrients.find(function(e){return e.attr_id===t})},r=[],i=0;i<this.state.nutrientValues.length;i++)a=n(this.state.nutrientValues[i].attr_id),r[i]={attr_id:a.attr_id,usda_nutr_desc:a.usda_nutr_desc,unit:a.unit};this.setState({nutrientValues:r})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"compare-container"},this.state.newList&&this.state.newList.map(function(t,a){var n=e.state.nutrientValues.map(function(e,a){return t.data.full_nutrients.find(function(t){return t.attr_id===e.attr_id})});return r.a.createElement("div",null,r.a.createElement("div",{className:"nutrition-card"},r.a.createElement("h2",null,t&&t.data.tag_name),r.a.createElement("h3",null,"Nutrition Facts"),r.a.createElement("p",{className:"line"},t&&t.data.serving_qty," ",t&&t.data.serving_unit),r.a.createElement("ul",null,n.map(function(t,a){return void 0===t?null:r.a.createElement("li",null,r.a.createElement("p",null,e.state.nutrientValues[a].usda_nutr_desc),r.a.createElement("p",null,t.value.toFixed(2)," ",e.state.nutrientValues[a].unit))}))))}))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).registerSavedItemsListener=function(){v.a.database().ref("savedItems/").on("value",function(t){console.log("got saved Items value",t);var a=[],n=t.val();for(var r in n)a.push(n[r]);e.setState({savedItems:a})})},e.showCompareResult=function(){e.setState({showCompare:!0,nutritionVisible:!1})},e.callBackData=function(t){e.setState({nutriData:t})},e.showNutritionCard=function(){e.setState({nutritionVisible:!0})},e.loadHandler=function(t){e.setState({loading:t})},e.callBackFirebase=function(t){e.setState({dropdownItems:t})},e.state={nutriData:{},userInput:"",nutritionVisible:!1,macroNutrients:{},loading:!1,dropdownItems:[],showCompare:!1,compareList:[],savedItems:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),_("macroNutrients").then(function(t){var a=t;e.setState({macroNutrients:a})}).then(function(){setTimeout(function(){e.setState({loading:!1})},1e3)}).catch(function(t){return console.log(t),e.setState({loading:!1}),p.a.fire({title:"Uh oh!",text:"Something happened on our end! Please try reloading!",type:"error",confirmButtonText:"Okay"})}),v.a.database().ref("comparedItems/").on("value",function(t){var a=[],n=t.val();for(var r in n)a.push({data:n[r]});e.setState({compareList:a})}),this.registerSavedItemsListener()}},{key:"render",value:function(){var e=this;return r.a.createElement(I.a,null,r.a.createElement("div",{className:"App"},!0===this.state.loading?r.a.createElement(y,null):null,r.a.createElement(w,{onCompareClick:this.showCompareResult,savedItems:this.state.savedItems}),r.a.createElement("main",{className:"wrapper"},r.a.createElement(k,{data:this.callBackData,toggleCard:this.showNutritionCard,value:this.state.userInput,loading:this.loadHandler}),r.a.createElement(C.a,{path:"/:tagID",render:function(t){console.log("details",e.state.savedItems);var a=e.state.savedItems.find(function(e){return e.tag_id===t.match.params.tagID});return console.log("selected item",a),a?r.a.createElement(O,Object.assign({},t,{item:a})):null}})),this.state.nutritionVisible?r.a.createElement(F,{commonData:this.state.nutriData.common,brandedData:this.state.nutriData.branded,value:this.state.userInput,nutrients:this.state.macroNutrients}):null,this.state.showCompare?r.a.createElement(M,{compareList:this.state.compareList,nutrients:this.state.macroNutrients}):null,r.a.createElement(T,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.7527bcf6.chunk.js.map
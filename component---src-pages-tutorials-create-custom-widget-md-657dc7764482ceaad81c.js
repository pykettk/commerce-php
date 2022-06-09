"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[6469],{49145:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(87462),i=a(63366),m=(a(15007),a(64983)),l=a(91515),p=["components"],o={},d={_frontmatter:o},r=l.Z;function s(e){var t=e.components,a=(0,i.Z)(e,p);return(0,m.mdx)(r,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"create-a-custom-widget"},"Create a custom widget"),(0,m.mdx)("p",null,"Widgets provide powerful features that are used to add dynamic or static content to store's pages.\nHere are the widgets that are available by default:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"CMS Page Link"),(0,m.mdx)("li",{parentName:"ul"},"CMS Static Block"),(0,m.mdx)("li",{parentName:"ul"},"Catalog Category Link"),(0,m.mdx)("li",{parentName:"ul"},"Catalog New Products List"),(0,m.mdx)("li",{parentName:"ul"},"Catalog Product Link"),(0,m.mdx)("li",{parentName:"ul"},"Catalog Products List"),(0,m.mdx)("li",{parentName:"ul"},"Orders and Returns"),(0,m.mdx)("li",{parentName:"ul"},"Recently Compared Products"),(0,m.mdx)("li",{parentName:"ul"},"Recently Viewed Products")),(0,m.mdx)("h2",{id:"configuration-options"},"Configuration options"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"label")),(0,m.mdx)("td",{parentName:"tr",align:null},"The name of the widget"),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Yes"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"description")),(0,m.mdx)("td",{parentName:"tr",align:null},"Contains a concise explanation of the widget's purpose"),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"Yes"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"parameters")),(0,m.mdx)("td",{parentName:"tr",align:null},"A list of widget's options"),(0,m.mdx)("td",{parentName:"tr",align:null},"Object"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"No"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"containers")),(0,m.mdx)("td",{parentName:"tr",align:null},"A list of layout containers, where the widget may be injected"),(0,m.mdx)("td",{parentName:"tr",align:null},"Object"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"No"))))),(0,m.mdx)("p",null,"This tutorial shows you how to create and insert your own widget on the frontend."),(0,m.mdx)("h2",{id:"step-1-declaring-the-widget"},"Step 1. Declaring the widget"),(0,m.mdx)("blockquote",null,(0,m.mdx)("p",{parentName:"blockquote"},(0,m.mdx)("inlineCode",{parentName:"p"},"etc/widget.xml"))),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<widgets xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Widget:etc/widget.xsd">\n    <widget class="ExampleCorp\\Learning\\Block\\Widget\\Test" id="orange_test_widget">\n        <label>My New Widget</label>\n        <description>This is a test widget!!!</description>\n        <parameters>\n            ...\n        </parameters>\n        <containers>\n            ...\n        </containers>\n    </widget>\n</widgets>\n')),(0,m.mdx)("p",null,"We need to also add a dependency to ",(0,m.mdx)("strong",{parentName:"p"},"Magento_Widget")," in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"module.xml")," file."),(0,m.mdx)("blockquote",null,(0,m.mdx)("p",{parentName:"blockquote"},(0,m.mdx)("inlineCode",{parentName:"p"},"etc/module.xml"))),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'...\n<sequence>\n    <module name="Magento_Widget" />\n</sequence>\n...\n')),(0,m.mdx)("h3",{id:"step-2-adding-widget-parameters"},"Step 2. Adding widget parameters"),(0,m.mdx)("p",null,"As a parameter, we are able to use any of these field types:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"text"),(0,m.mdx)("li",{parentName:"ul"},"select"),(0,m.mdx)("li",{parentName:"ul"},"multiselect"),(0,m.mdx)("li",{parentName:"ul"},"block")),(0,m.mdx)("p",null,"Add a text and a select field:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<widgets xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Widget:etc/widget.xsd">\n    <widget class="ExampleCorp\\Learning\\Block\\Widget\\Test" id="orange_test_widget">\n        ...\n        <parameters>\n            <parameter name="title" xsi:type="text" required="true" visible="true" sort_order="10">\n                <label>Label</label>\n            </parameter>\n            <parameter name="size" xsi:type="select" visible="true" required="true" sort_order="20">\n                <label translate="true">Size</label>\n                <options>\n                    <option name="s" value="S">\n                        <label>S</label>\n                    </option>\n                    <option name="m" value="M" selected="true">\n                        <label>M</label>\n                    </option>\n                    <option name="l" value="L">\n                        <label>L</label>\n                    </option>\n                </options>\n            </parameter>\n        </parameters>\n    </widget>\n</widgets>\n')),(0,m.mdx)("h3",{id:"step-3-check-the-widget"},"Step 3. Check the widget"),(0,m.mdx)("p",null,"Run the following commands to apply the module dependency declared in ",(0,m.mdx)("inlineCode",{parentName:"p"},"module.xml"),"."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:disable Vendor_Module\n")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:enable Vendor_Module\n")),(0,m.mdx)("p",null,"where ",(0,m.mdx)("inlineCode",{parentName:"p"},"Vendor_Module")," is replaced with the module name."),(0,m.mdx)("p",null,"After clearing the cache, the new widget ",(0,m.mdx)("inlineCode",{parentName:"p"},"My New Widget")," should be available."),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"738px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.12499999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/6bf47365a16b25ee03ae2e1507c26217/cb523/custom-widget.webp 320w","/commerce-php/static/6bf47365a16b25ee03ae2e1507c26217/797b9/custom-widget.webp 640w","/commerce-php/static/6bf47365a16b25ee03ae2e1507c26217/05772/custom-widget.webp 738w"],sizes:"(max-width: 738px) 100vw, 738px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/6bf47365a16b25ee03ae2e1507c26217/72799/custom-widget.png 320w","/commerce-php/static/6bf47365a16b25ee03ae2e1507c26217/6af66/custom-widget.png 640w","/commerce-php/static/6bf47365a16b25ee03ae2e1507c26217/774b6/custom-widget.png 738w"],sizes:"(max-width: 738px) 100vw, 738px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/6bf47365a16b25ee03ae2e1507c26217/774b6/custom-widget.png",alt:"Custom Widget",title:"Custom Widget",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("p",null,"To add it to the homepage, below the page content:"),(0,m.mdx)("p",null,"After selecting the widget type and the layout location, we should be able to see the widget's options."),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"730px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/0fae92ba1cf818fe805a03c53c57a074/cb523/custom-widget-options.webp 320w","/commerce-php/static/0fae92ba1cf818fe805a03c53c57a074/797b9/custom-widget-options.webp 640w","/commerce-php/static/0fae92ba1cf818fe805a03c53c57a074/da0ed/custom-widget-options.webp 730w"],sizes:"(max-width: 730px) 100vw, 730px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/0fae92ba1cf818fe805a03c53c57a074/72799/custom-widget-options.png 320w","/commerce-php/static/0fae92ba1cf818fe805a03c53c57a074/6af66/custom-widget-options.png 640w","/commerce-php/static/0fae92ba1cf818fe805a03c53c57a074/e9beb/custom-widget-options.png 730w"],sizes:"(max-width: 730px) 100vw, 730px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/0fae92ba1cf818fe805a03c53c57a074/e9beb/custom-widget-options.png",alt:"Widget Options",title:"Widget Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,m.mdx)("h3",{id:"step-4-create-the-block"},"Step 4. Create the block"),(0,m.mdx)("p",null,"Create the block class that we provided on the widget's initialization, responsible for\nrendering it on the frontend."),(0,m.mdx)("blockquote",null,(0,m.mdx)("p",{parentName:"blockquote"},(0,m.mdx)("inlineCode",{parentName:"p"},"ExampleCorp/Learning/Block/Widget/Test"))),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},'namespace ExampleCorp\\Learning\\Block\\Widget;\n\nuse Magento\\Framework\\View\\Element\\Template;\nuse Magento\\Widget\\Block\\BlockInterface;\n\nclass Test extends Template implements BlockInterface\n{\n    protected $_template = "widget/test.phtml";\n}\n')),(0,m.mdx)("h3",{id:"step-5-create-the-template"},"Step 5. Create the template"),(0,m.mdx)("p",null,"And finally, create the template that will be used for showing the widget's data on the frontend."),(0,m.mdx)("blockquote",null,(0,m.mdx)("p",{parentName:"blockquote"},(0,m.mdx)("inlineCode",{parentName:"p"},"ExampleCorp/Learning/view/frontend/templates/widget/test.phtml"))),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/** \\ExampleCorp\\Learning\\Block\\Widget\\Test $block */\n?>\n<h3><?= $block->escapeHtml($block->getData('title')) ?></h3>\n<h3><?= $block->escapeHtml(__('Size:')) ?> <?= $block->escapeHtml($block->getData('size')) ?></h3>\n")),(0,m.mdx)("h3",{id:"step-6-clean-cache"},"Step 6. Clean Cache"),(0,m.mdx)("p",null,"Clean the cache with the following command:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento cache:clean\n")),(0,m.mdx)("h2",{id:"result"},"Result"),(0,m.mdx)("p",null,"The widget is now shown on the frontend."),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"402px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.0625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/cf2b6587abeceacc3f2bfba4b3ea4316/cb523/custom-widget-result.webp 320w","/commerce-php/static/cf2b6587abeceacc3f2bfba4b3ea4316/a9cef/custom-widget-result.webp 402w"],sizes:"(max-width: 402px) 100vw, 402px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/cf2b6587abeceacc3f2bfba4b3ea4316/72799/custom-widget-result.png 320w","/commerce-php/static/cf2b6587abeceacc3f2bfba4b3ea4316/0ec92/custom-widget-result.png 402w"],sizes:"(max-width: 402px) 100vw, 402px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/cf2b6587abeceacc3f2bfba4b3ea4316/0ec92/custom-widget-result.png",alt:"Widget Options",title:"Widget Options",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-create-custom-widget-md-657dc7764482ceaad81c.js.map
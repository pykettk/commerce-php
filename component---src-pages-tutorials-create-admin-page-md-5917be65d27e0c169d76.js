"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[98707],{23560:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return r},default:function(){return s}});var t=a(87462),o=a(63366),l=(a(15007),a(64983)),m=a(91515),i=["components"],r={},d={_frontmatter:r},p=m.Z;function s(e){var n=e.components,a=(0,o.Z)(e,i);return(0,l.mdx)(p,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"create-an-admin-page"},"Create an Admin page"),(0,l.mdx)("p",null,"This tutorial gives instructions for the creation of a ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," that displays a simple page in the ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/magento-admin"},"Admin"),"."),(0,l.mdx)("p",null,"For the purposes of this tutorial 'MyCompany' is the name of the company associated with a module named ",(0,l.mdx)("inlineCode",{parentName:"p"},"ExampleAdminNewPage"),"."),(0,l.mdx)("h2",{id:"working-directory"},"Working directory"),(0,l.mdx)("p",null,"Start by creating the working directory for all the module files."),(0,l.mdx)("p",null,"In your development environment under the ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/code")," directory, run the following command:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p MyCompany/ExampleAdminNewPage\n")),(0,l.mdx)("p",null,"This command creates the ",(0,l.mdx)("inlineCode",{parentName:"p"},"MyCompany")," company directory and the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ExampleAdminNewPage")," module directory. The latter will be the root directory for the module we will create."),(0,l.mdx)("h2",{id:"initial-boilerplate-files"},"Initial boilerplate files"),(0,l.mdx)("p",null,"These initial boilerplate files are the bare essential files needed for any module."),(0,l.mdx)("h3",{id:"composerjson"},(0,l.mdx)("inlineCode",{parentName:"h3"},"composer.json")),(0,l.mdx)("p",null,"In the module's root directory, create the file ",(0,l.mdx)("inlineCode",{parentName:"p"},"composer.json"),". This file gives ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/composer"},"composer")," the ability to install this module and its dependencies.\nFor more information see: ",(0,l.mdx)("a",{parentName:"p",href:"../development/build/composer-integration.md"},(0,l.mdx)("inlineCode",{parentName:"a"},"composer.json")),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},' {\n   "name": "mycompany/sample-module-minimal",\n   "description": "A module that creates a page in the Admin area",\n   "type": "magento2-module",\n   "version": "1.0.0",\n   "license": [\n     "OSL-3.0",\n     "AFL-3.0"\n   ],\n   "require": {\n     "php": "~7.2.0||~7.3.0"\n   },\n   "autoload": {\n     "files": [ "registration.php" ],\n     "psr-4": {\n       "MyCompany\\\\ExampleAdminNewPage\\\\": ""\n     }\n   }\n }\n')),(0,l.mdx)("h3",{id:"registrationphp"},(0,l.mdx)("inlineCode",{parentName:"h3"},"registration.php")),(0,l.mdx)("p",null,"In the module's root directory, create the file ",(0,l.mdx)("inlineCode",{parentName:"p"},"registration.php"),". This file registers the module ",(0,l.mdx)("inlineCode",{parentName:"p"},"MyCompany_ExampleAdminNewPage")," with the application."),(0,l.mdx)("p",null,"For more information see: ",(0,l.mdx)("a",{parentName:"p",href:"../development/build/component-registration.md"},"registering your component"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Framework\\Component\\ComponentRegistrar;\n\nComponentRegistrar::register(\n    ComponentRegistrar::MODULE,\n    'MyCompany_ExampleAdminNewPage',\n    __DIR__\n);\n")),(0,l.mdx)("h3",{id:"etcmodulexml"},(0,l.mdx)("inlineCode",{parentName:"h3"},"etc/module.xml")),(0,l.mdx)("p",null,"In the module's root directory, create a new directory called ",(0,l.mdx)("inlineCode",{parentName:"p"},"etc"),". Under that directory, create the file ",(0,l.mdx)("inlineCode",{parentName:"p"},"module.xml"),". This file specifies the name and setup version of this module."),(0,l.mdx)("p",null,"For more information see: ",(0,l.mdx)("a",{parentName:"p",href:"../development/build/component-name.md"},"naming your component"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">\n  <module name="MyCompany_ExampleAdminNewPage">\n  </module>\n</config>\n')),(0,l.mdx)("p",null,"If your module does not implement ",(0,l.mdx)("a",{parentName:"p",href:"../development/components/declarative-schema/index.md"},"Declarative Schema"),", define the ",(0,l.mdx)("inlineCode",{parentName:"p"},"setup_version")," attribute in the module element."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<module name="MyCompany_ExampleAdminNewPage" setup_version="1.0.0">\n')),(0,l.mdx)("p",null,"If your module has a dependency with other modules, you can change the loading order sequence of the module by using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"sequence")," node.\nIn the example below, ",(0,l.mdx)("inlineCode",{parentName:"p"},"MyCompany_ExampleAdminNewPage")," will be loaded after the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Magento_Checkout")," module."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<module name="MyCompany_ExampleAdminNewPage">\n  <sequence>\n    <module name="Magento_Checkout"/>\n  </sequence>\n</module>\n')),(0,l.mdx)("h2",{id:"routing-and-navigation"},"Routing and navigation"),(0,l.mdx)("p",null,"Before we can view the module's page, we need a way to navigate to it. These files create a link to the page in the left navigation and indicates how to resolve requests for that page."),(0,l.mdx)("p",null,"For more information on this topic, see: ",(0,l.mdx)("a",{parentName:"p",href:"../development/components/routing.md"},"routing"),"."),(0,l.mdx)("h3",{id:"etcadminhtmlmenuxml"},(0,l.mdx)("inlineCode",{parentName:"h3"},"etc/adminhtml/menu.xml")),(0,l.mdx)("p",null,"Under the created ",(0,l.mdx)("inlineCode",{parentName:"p"},"etc")," directory, create a new directory called ",(0,l.mdx)("inlineCode",{parentName:"p"},"adminhtml"),". Under that directory, create the file ",(0,l.mdx)("inlineCode",{parentName:"p"},"menu.xml"),". This ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," file adds new menu items to the ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"Admin"),"."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"menu.xml")," file provided below adds two items in the Content section of the left navigation:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"A new separate section with the title ",(0,l.mdx)("strong",{parentName:"p"},"Greetings")," under Content.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"A link with the label ",(0,l.mdx)("strong",{parentName:"p"},"Hello World")," that leads to a page request for ",(0,l.mdx)("inlineCode",{parentName:"p"},"exampleadminnewpage/helloworld/index")," underneath that new section."),(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"608px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"124.37499999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/41c967c3923fa7cad448bcfb3c1a62fb/cb523/hello-world-menu-item.webp 320w","/commerce-php/static/41c967c3923fa7cad448bcfb3c1a62fb/969a1/hello-world-menu-item.webp 608w"],sizes:"(max-width: 608px) 100vw, 608px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/41c967c3923fa7cad448bcfb3c1a62fb/72799/hello-world-menu-item.png 320w","/commerce-php/static/41c967c3923fa7cad448bcfb3c1a62fb/18872/hello-world-menu-item.png 608w"],sizes:"(max-width: 608px) 100vw, 608px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/41c967c3923fa7cad448bcfb3c1a62fb/18872/hello-world-menu-item.png",alt:"Hello World menu item",title:"Hello World menu item",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,l.mdx)("p",null,"The following parts make up the generated page request link to the ",(0,l.mdx)("strong",{parentName:"p"},"Hello World")," page:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"exampleadminnewpage")," - This is the ",(0,l.mdx)("inlineCode",{parentName:"li"},"frontName"),". Because its purpose is to help route requests to the correct module, we give it the same name as the module, but this is not required."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"helloworld")," - This specifies the name of the controller to use."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"index")," - In the XML file, since the action for the controller is not specified, the application uses the default value ",(0,l.mdx)("inlineCode",{parentName:"li"},"index"),".")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Backend:etc/menu.xsd">\n    <menu>\n      <add id="MyCompany_ExampleAdminNewPage::greetings" title="Greetings" translate="title" module="MyCompany_ExampleAdminNewPage" parent="Magento_Backend::content" sortOrder="50" dependsOnModule="MyCompany_ExampleAdminNewPage" resource="MyCompany_ExampleAdminNewPage::greetings"/>\n      <add id="MyCompany_ExampleAdminNewPage::greetings_helloworld" title="Hello World" translate="title" module="MyCompany_ExampleAdminNewPage" parent="MyCompany_ExampleAdminNewPage::greetings" sortOrder="10" dependsOnModule="MyCompany_ExampleAdminNewPage" action="exampleadminnewpage/helloworld" resource="MyCompany_ExampleAdminNewPage::greetings"/>\n    </menu>\n</config>\n')),(0,l.mdx)("h3",{id:"etcadminhtmlroutesxml"},(0,l.mdx)("inlineCode",{parentName:"h3"},"etc/adminhtml/routes.xml")),(0,l.mdx)("p",null,"Under ",(0,l.mdx)("inlineCode",{parentName:"p"},"etc/adminhtml")," create the file ",(0,l.mdx)("inlineCode",{parentName:"p"},"routes.xml"),". The contents of this  XML file tells the application to route requests that use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"frontName")," ",(0,l.mdx)("inlineCode",{parentName:"p"},"exampleadminnewpage")," to this module."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">\n    <router id="admin">\n        <route id="exampleadminnewpage" frontName="exampleadminnewpage">\n            <module name="MyCompany_ExampleAdminNewPage"/>\n        </route>\n    </router>\n</config>\n')),(0,l.mdx)("h2",{id:"page-controller"},"Page controller"),(0,l.mdx)("p",null,"Now that we have a link to the ",(0,l.mdx)("strong",{parentName:"p"},"Hello World")," page, we need to create the file needed to handle that request."),(0,l.mdx)("h3",{id:"controlleradminhtmlhelloworldindexphp"},(0,l.mdx)("inlineCode",{parentName:"h3"},"Controller/Adminhtml/HelloWorld/Index.php")),(0,l.mdx)("p",null,"In the module's root directory, run the following command:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p Controller/Adminhtml/HelloWorld\n")),(0,l.mdx)("p",null,"Inside ",(0,l.mdx)("inlineCode",{parentName:"p"},"Controller/Adminhtml/HelloWorld")," directory, create the file ",(0,l.mdx)("inlineCode",{parentName:"p"},"Index.php"),". This file is the class assigned to the default Index action for the ",(0,l.mdx)("inlineCode",{parentName:"p"},"HelloWorld")," controller. Since the admin area serves this page, the file belongs in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Adminhtml")," directory, and the class itself extends ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4%7D/app/code/Magento/Backend/App/Action.php"},(0,l.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Backend\\App\\Action")),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace MyCompany\\ExampleAdminNewPage\\Controller\\Adminhtml\\HelloWorld;\n\nuse Magento\\Backend\\App\\Action;\nuse Magento\\Backend\\App\\Action\\Context;\nuse Magento\\Framework\\App\\Action\\HttpGetActionInterface;\nuse Magento\\Framework\\View\\Result\\Page;\nuse Magento\\Framework\\View\\Result\\PageFactory;\n\n/**\n * Class Index\n */\nclass Index extends Action implements HttpGetActionInterface\n{\n    const MENU_ID = 'MyCompany_ExampleAdminNewPage::greetings_helloworld';\n\n    /**\n     * @var PageFactory\n     */\n    protected $resultPageFactory;\n\n    /**\n     * Index constructor.\n     *\n     * @param Context $context\n     * @param PageFactory $resultPageFactory\n     */\n    public function __construct(\n        Context $context,\n        PageFactory $resultPageFactory\n    ) {\n        parent::__construct($context);\n\n        $this->resultPageFactory = $resultPageFactory;\n    }\n\n    /**\n     * Load the page defined in view/adminhtml/layout/exampleadminnewpage_helloworld_index.xml\n     *\n     * @return Page\n     */\n    public function execute()\n    {\n        $resultPage = $this->resultPageFactory->create();\n        $resultPage->setActiveMenu(static::MENU_ID);\n        $resultPage->getConfig()->getTitle()->prepend(__('Hello World'));\n\n        return $resultPage;\n    }\n}\n")),(0,l.mdx)("h2",{id:"page-view"},"Page view"),(0,l.mdx)("p",null,"Now that the application knows how to handle requests for the ",(0,l.mdx)("strong",{parentName:"p"},"Hello World")," page, we need view files that define the look of the page."),(0,l.mdx)("p",null,"Create the necessary directories for the files by running the following commands from the module's root directory:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p view/adminhtml/layout\nmkdir -p view/adminhtml/templates\n")),(0,l.mdx)("p",null,"These files belong in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"view/adminhtml")," directory because the Admin area use these files during page generation."),(0,l.mdx)("h3",{id:"viewadminhtmllayoutexampleadminnewpage_helloworld_indexxml"},(0,l.mdx)("inlineCode",{parentName:"h3"},"view/adminhtml/layout/exampleadminnewpage_helloworld_index.xml")),(0,l.mdx)("p",null,"This file defines the ",(0,l.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/layout"},"layout"),' and structure of the index page for the HelloWorld controller. It sets the title to "Greetings" and assigns the ',(0,l.mdx)("inlineCode",{parentName:"p"},"helloworld.phtml")," template as the content in a ",(0,l.mdx)("inlineCode",{parentName:"p"},"Magento\\Backend\\Block\\Template")," block class."),(0,l.mdx)("p",null,"The name of this file uses the following pattern: ",(0,l.mdx)("em",{parentName:"p"},"routeId"),"_",(0,l.mdx)("em",{parentName:"p"},"controller"),"_",(0,l.mdx)("em",{parentName:"p"},"action"),".xml"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <referenceBlock name="page.title">\n        <action method="setPageTitle">\n            <argument name="title" xsi:type="string">Greetings</argument>\n        </action>\n    </referenceBlock>\n    <body>\n        <referenceContainer name="content">\n            <block class="Magento\\Backend\\Block\\Template" template="MyCompany_ExampleAdminNewPage::helloworld.phtml"/>\n        </referenceContainer>\n    </body>\n</page>\n')),(0,l.mdx)("h3",{id:"viewadminhtmltemplateshelloworldphtml"},(0,l.mdx)("inlineCode",{parentName:"h3"},"view/adminhtml/templates/helloworld.phtml")),(0,l.mdx)("p",null,"This template file contains the actual page content for the ",(0,l.mdx)("strong",{parentName:"p"},"Hello World")," page."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-html"},"<p>Hello World!</p>\n")),(0,l.mdx)("h2",{id:"full-module-directory-structure"},"Full module directory structure"),(0,l.mdx)("p",null,"The module is now complete. Your module's directory structure under ",(0,l.mdx)("inlineCode",{parentName:"p"},"app/code")," should look like the following:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-tree"},"MyCompany\n|-- ExampleAdminNewPage\n    |\n    |-- Controller\n    |   |-- Adminhtml\n    |       |-- HelloWorld\n    |           |-- Index.php\n    |-- etc\n    |   |-- adminhtml\n    |   |   |-- menu.xml\n    |   |   |-- routes.xml\n    |   |-- module.xml\n    |-- view\n    |   |-- adminhtml\n    |       |-- layout\n    |       |   |-- exampleadminnewpage_helloworld_index.xml\n    |       |-- templates\n    |           |-- helloworld.phtml\n    |-- composer.json\n    |-- registration.php\n")),(0,l.mdx)("h2",{id:"installing-the-module"},"Installing the module"),(0,l.mdx)("p",null,"Now that the module is code-complete, run the following commands to install it:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"bin/magento module:status")," - This command shows a list of enabled/disabled modules."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"bin/magento module:enable MyCompany_ExampleAdminNewPage")," - If necessary, run this to enable the disabled module."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"bin/magento setup:upgrade")," - This command will properly register the module."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"bin/magento setup:di:compile")," - This command compiles classes used in dependency injections."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"bin/magento setup:static-content:deploy")," - (Production mode only) This command deploys static view files. If you are in developer mode, refer to ",(0,l.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/frontend-dev-guide/cache_for_frontdevs.html#clean_static_cache"},"Clean static files cache")," to refresh the static view files."),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("inlineCode",{parentName:"li"},"bin/magento cache:clean")," - This command cleans the cache.")),(0,l.mdx)("p",null,"Once the module installation has completed, the link to the ",(0,l.mdx)("strong",{parentName:"p"},"Hello World")," page should appear in the ",(0,l.mdx)("strong",{parentName:"p"},"Greetings")," section under ",(0,l.mdx)("strong",{parentName:"p"},"Content")," in the left navigation in the admin area. Clicking this link will take you to a page that looks like the one pictured below."),(0,l.mdx)("p",null,(0,l.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1270px"}},"\n      ",(0,l.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,l.mdx)("picture",{parentName:"span"},"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/c94f12bdc5b383850e6493b41ed11900/cb523/hello-world-page.webp 320w","/commerce-php/static/c94f12bdc5b383850e6493b41ed11900/797b9/hello-world-page.webp 640w","/commerce-php/static/c94f12bdc5b383850e6493b41ed11900/ad434/hello-world-page.webp 1270w"],sizes:"(max-width: 1270px) 100vw, 1270px",type:"image/webp"}),"\n          ",(0,l.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/c94f12bdc5b383850e6493b41ed11900/72799/hello-world-page.png 320w","/commerce-php/static/c94f12bdc5b383850e6493b41ed11900/6af66/hello-world-page.png 640w","/commerce-php/static/c94f12bdc5b383850e6493b41ed11900/e8e04/hello-world-page.png 1270w"],sizes:"(max-width: 1270px) 100vw, 1270px",type:"image/png"}),"\n          ",(0,l.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/c94f12bdc5b383850e6493b41ed11900/e8e04/hello-world-page.png",alt:"Hello World Page",title:"Hello World Page",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-create-admin-page-md-5917be65d27e0c169d76.js.map
'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Tailwind documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' : 'data-target="#xs-components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' :
                                            'id="xs-components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EnergiPageModule.html" data-type="entity-link" >EnergiPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EnergiPageModule-2f91a3605b21b9072f6fe2be1893c303363dbf70b51e83359d98522a3ca1b064b5115101e7d2d0bfdc2e5bc49cd164933c18cd74b073095674bd0e615017dea8"' : 'data-target="#xs-components-links-module-EnergiPageModule-2f91a3605b21b9072f6fe2be1893c303363dbf70b51e83359d98522a3ca1b064b5115101e7d2d0bfdc2e5bc49cd164933c18cd74b073095674bd0e615017dea8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EnergiPageModule-2f91a3605b21b9072f6fe2be1893c303363dbf70b51e83359d98522a3ca1b064b5115101e7d2d0bfdc2e5bc49cd164933c18cd74b073095674bd0e615017dea8"' :
                                            'id="xs-components-links-module-EnergiPageModule-2f91a3605b21b9072f6fe2be1893c303363dbf70b51e83359d98522a3ca1b064b5115101e7d2d0bfdc2e5bc49cd164933c18cd74b073095674bd0e615017dea8"' }>
                                            <li class="link">
                                                <a href="components/EnergiPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnergiPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EnergiPageRoutingModule.html" data-type="entity-link" >EnergiPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' : 'data-target="#xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' :
                                            'id="xs-components-links-module-HomePageModule-505138d4b0b902820bf04bf9e711dc5c228dc709f7eb29e730938c67b74c1e14c0502b3e3088157496bc55ca02f2a16dd453cf16dfda29790b02c7c447c557e6"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandPageModule.html" data-type="entity-link" >LandPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LandPageModule-8341918e1cc3f97e7c625f38571f8bf2c9dc682684d39dee64247dc6f07a079cf8c86ca883bb0b22f9764ccea146a4a99fdbbe371991f576b5c6885ced1533fc"' : 'data-target="#xs-components-links-module-LandPageModule-8341918e1cc3f97e7c625f38571f8bf2c9dc682684d39dee64247dc6f07a079cf8c86ca883bb0b22f9764ccea146a4a99fdbbe371991f576b5c6885ced1533fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandPageModule-8341918e1cc3f97e7c625f38571f8bf2c9dc682684d39dee64247dc6f07a079cf8c86ca883bb0b22f9764ccea146a4a99fdbbe371991f576b5c6885ced1533fc"' :
                                            'id="xs-components-links-module-LandPageModule-8341918e1cc3f97e7c625f38571f8bf2c9dc682684d39dee64247dc6f07a079cf8c86ca883bb0b22f9764ccea146a4a99fdbbe371991f576b5c6885ced1533fc"' }>
                                            <li class="link">
                                                <a href="components/LandPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LandPageRoutingModule.html" data-type="entity-link" >LandPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VandPageModule.html" data-type="entity-link" >VandPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VandPageModule-587c0ca0bcd7b9942175531daa4b3f71ffe611be1cd81220c6e79cdd355c0b025c0a4c905b7c920c45f321177ba08693ab8f05818e2d9d8c215276253e5c14bc"' : 'data-target="#xs-components-links-module-VandPageModule-587c0ca0bcd7b9942175531daa4b3f71ffe611be1cd81220c6e79cdd355c0b025c0a4c905b7c920c45f321177ba08693ab8f05818e2d9d8c215276253e5c14bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VandPageModule-587c0ca0bcd7b9942175531daa4b3f71ffe611be1cd81220c6e79cdd355c0b025c0a4c905b7c920c45f321177ba08693ab8f05818e2d9d8c215276253e5c14bc"' :
                                            'id="xs-components-links-module-VandPageModule-587c0ca0bcd7b9942175531daa4b3f71ffe611be1cd81220c6e79cdd355c0b025c0a4c905b7c920c45f321177ba08693ab8f05818e2d9d8c215276253e5c14bc"' }>
                                            <li class="link">
                                                <a href="components/VandPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VandPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VandPageRoutingModule.html" data-type="entity-link" >VandPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
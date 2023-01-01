class ContaoVueMegamenu {
    constructor(vueElement, menuitems) {

        const {createApp} = Vue

        const app = createApp({

            el: vueElement, // #vueNav_33
            data() {
                return {
                    objNav: menuitems
                }
            },

            // Lifecycle hooks are called at different stages
            // of a component's lifecycle.
            // This function will be called when the component is mounted.
            mounted() {
                const self = this;

                document.addEventListener('click', function (e) {
                    if (typeof e.target.parentNode === 'undefined' || !e.target.parentNode.classList.contains('dropdown-bs-toggle')) {
                        self.closeAll();
                    }
                }, false);
            },

            methods: {
                getAriaExpandedProp(navitem) {
                    if (!navitem.subitems) {
                        return false;
                    } else {
                        if (navitem.isExpanded) {
                            return 'true';
                        } else {
                            return 'false';
                        }
                    }
                },
                /**
                 * Fetch all the data from the server
                 */
                clickCheck(item, event) {
                    if (event) {
                        event.preventDefault();
                    }
                    if (item.isActive) {
                        // Prevent redirection and closing the nav
                        event.stopPropagation();
                        return false;
                    }
                    if (item.subitems) {
                        // Prevent redirection and closing the nav
                        event.stopPropagation();
                        return false;
                    }
                    return true;
                },

                /**
                 * Click event
                 * @param item
                 * @param event
                 * @param object
                 * @returns {boolean}
                 */
                toggleDropdown(item, event, object = null) {
                    const self = this;

                    if (object === null) {
                        object = self.objNav.items;
                    }

                    for (let k of Object.keys(object)) {
                        let element = object[k];
                        if (element.id === item.id) {
                            //
                            if (!element.subitems && !element.isActive) {
                                location.href = element.href;
                            }
                            if (!element.subitems && element.isActive) {
                                return false;
                            }
                            element.isExpanded = element.isExpanded !== true;
                        } else {
                            element.isExpanded = false;
                        }

                        if (element.subitems) {
                            if (element.subitems.length > 0) {
                                self.toggleDropdown(item, event, element.subitems);
                            }
                        }
                    }
                },

                closeAll(elements) {
                    const self = this;
                    if (!elements) {
                        elements = self.objNav.items;
                    }

                    for (let k of Object.keys(elements)) {
                        let element = elements[k];
                        element.isExpanded = false;
                        if (element.subitems) {
                            if (element.subitems.length > 0) {
                                self.closeAll(element.subitems);
                            }
                        }
                    }
                },
            },
        });

        app.config.compilerOptions.delimiters = ['[[', ']]'];
        return app.mount(vueElement);

    }
}

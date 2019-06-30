class ContaoVueMegamenu {
    constructor(vueId, menuitems) {
        new Vue({
            el: vueId,
            data: {
                objNav: menuitems
            },
            created: function created() {
                var self = this;
                window.addEventListener('click', function (e) {
                    if (!e.target.parentNode.classList.contains('dropdown-toggle')) {
                        self.closeAll();
                    }
                }, false);
            },
            methods: {
                getAriaExpandedProp: function getAriaExpandedProp(navitem) {
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
                clickCheck: function clickCheck(item, event) {
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
                toggleDropdown: function toggleDropdown(item, event, object = null) {
                    let self = this;

                    if (object === null) {
                        object = self.objNav.items;
                    }

                    for (let k of Object.keys(object)) {
                        let element = object[k];
                        if (element.id === item.id) {
                            //
                            if(!element.subitems && !element.isActive){
                                location.href = element.href;
                            }
                            if(!element.subitems && element.isActive){
                                return false;
                            }
                            if (element.isExpanded === true) {
                                element.isExpanded = false;
                            } else {
                                element.isExpanded = true;
                            }
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
                closeAll: function closeAll(elements) {
                    let self = this;
                    if (!elements) {
                        elements = self.objNav.items;
                    }

                    for (let k of Object.keys(elements)) {
                        let element = elements[k];
                        console.log('bla');
                        element.isExpanded = false;
                        if (element.subitems) {
                            if (element.subitems.length > 0) {
                                self.closeAll(element.subitems);
                            }
                        }
                    }
                }
            }
        });
    }
}





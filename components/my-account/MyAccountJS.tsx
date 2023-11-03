import { useEffect } from "preact/hooks";

const ATTRIBUTES = {
    "data-tab": "data-tab",
    "data-tab-content": "data-tab-content",
    "data-tab-menu-item" : "data-tab-menu-item",
    "data-tab-menu-target" : "data-tab-menu-target"
  };

function MyAccountJS ({rootId, tabContainerId, menuId}) {
    const setup = ({rootId, tabContainerId, menuId}) => {
        const root = document.getElementById(rootId);
        const tabContainer = document.getElementById(tabContainerId);
        const tabContent = tabContainer?.querySelectorAll(`[${ATTRIBUTES["data-tab-content"]}]`);
        const tabs = tabContainer?.querySelectorAll(`[${ATTRIBUTES["data-tab-menu-item"]}]`)

        console.log(root)
        console.log(tabContainer)
        console.log(tabs)
        
      /*   tabContent.forEach((c) => {
            c.classList.add("hidden");
        }); */


        // change tabs on click
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
               

                const tabTarget =  document.getElementById(tab.dataset.tabMenuTarget)

                console.log('clicked tab ', tabTarget)
                
                // remove active class from all tabs
                tabContent.forEach((c) => {
                    c.classList.add("hidden");
                });

                // add active class to clicked tab
                tabTarget.classList.remove("hidden");
            });
        });
    };

    useEffect(() => {
        setup({rootId, tabContainerId, menuId});
    }, []);

    return <div data-my-account-js />
}

export default MyAccountJS;
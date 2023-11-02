import { useEffect } from "preact/hooks";

const ATTRIBUTES = {
    "data-tab": "data-tab",
    "data-tab-content": "data-tab-content",
    "data-menu-item" : "data-menu-item"
  };

function MyAccountJS ({rootId, tabContainerId, menuId}) {
    const setup = ({rootId, tabContainerId, menuId}) => {
        const root = document.getElementById(rootId);
        const tabContainer = document.getElementById(tabContainerId);
        const tabContent = tabContainer?.querySelectorAll(`[${ATTRIBUTES["data-tab-content"]}]`);

        // change tabs on click
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const tabId = tab.getAttribute("id");
                const tabElement = document.getElementById(tabId);
                
                // remove active class from all tabs
                tabs.forEach((tab) => {
                    tab.classList.add("hidden");
                });

                // add active class to clicked tab
                tabElement.classList.remove("hidden");
            });
        });
    };

    useEffect(() => {
        setup({rootId, tabContainerId, menuId});
    }, []);

    return <div data-my-account-js />
}

export default MyAccountJS;
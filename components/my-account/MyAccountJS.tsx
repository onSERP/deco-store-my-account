import { useEffect } from "preact/hooks";

export interface Props {
  rootId: string;
  tabContainerId: string;
  menuId: string;
}

const ATTRIBUTES = {
  "data-tab": "data-tab",
  "data-tab-content": "data-tab-content",
  "data-tab-menu-item": "data-tab-menu-item",
  "data-tab-menu-target": "data-tab-menu-target",
};

function MyAccountJS({ rootId, tabContainerId, menuId }: Props) {
  const setup = ({ rootId, tabContainerId, menuId }: Props) => {
    const root = document.getElementById(rootId);
    const tabContainer = document.getElementById(tabContainerId);
    const tabContent = tabContainer?.querySelectorAll(
      `[${ATTRIBUTES["data-tab-content"]}]`,
    );
    const tabs = root?.querySelectorAll(
      `[${ATTRIBUTES["data-tab-menu-item"]}]`,
    );

    if (!tabContainer || !tabContent || !tabs) {
      return;
    }

    tabContent.forEach((c, i) => {
      i > 0 && c.classList.add("hidden");
    });

    // change tabs on click
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabTarget = document.getElementById(
          (tab as HTMLElement)?.dataset.tabMenuTarget as string,
        );

        // remove active class from all tabs
        tabContent.forEach((c) => {
          c.classList.add("hidden");
        });

        // add active class to clicked tab
        tabTarget?.classList.remove("hidden");
      });
    });
  };

  useEffect(() => {
    setup({ rootId, tabContainerId, menuId });
  }, []);

  return <div data-my-account-js />;
}

export default MyAccountJS;

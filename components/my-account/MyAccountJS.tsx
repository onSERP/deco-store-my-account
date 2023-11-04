import { useEffect } from "preact/hooks";

export interface Props {
  tabsData: {
    rootId: string;
    tabContainerId: string;
    menuId: string;
    userDataId: string;
  };
}

const ATTRIBUTES = {
  "data-tab": "data-tab",
  "data-tab-content": "data-tab-content",
  "data-tab-menu-item": "data-tab-menu-item",
  "data-tab-menu-target": "data-tab-menu-target",
  "data-user-edit": "data-user-edit",
  "data-user-edit-form": "data-user-edit-form",
  "data-user-show": "data-user-show",
  "data-user-edit-return": "data-user-edit-return",
};

function MyAccountJS({ tabsData }: Props) {
  const tabsFn = ({ rootId, tabContainerId, menuId }: Props["tabsData"]) => {
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
      c.classList.add("hidden");
    });

    // get active tab
    const activeTab = localStorage.getItem("myAccount_activeTab");
    if (activeTab) {
      const tabTarget = document.getElementById(activeTab);

      console.log(activeTab, tabTarget);
      tabTarget && tabTarget.classList.remove("hidden");
    }

    // change tabs on click
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabTarget = document.getElementById(
          (tab as HTMLElement)?.dataset.tabMenuTarget as string,
        );

        // save active tab
        localStorage.setItem(
          "myAccount_activeTab",
          (tab as HTMLElement)?.dataset?.tabMenuTarget as string,
        );

        // remove active class from all tabs
        tabContent.forEach((c) => {
          c.classList.add("hidden");
        });

        // add active class to clicked tab
        tabTarget?.classList.remove("hidden");
      });
    });

    const drawer = document.getElementsByClassName("my-custom-drawer")[0];
    const menu = document.getElementById(menuId);
    drawer?.addEventListener("click", function () {
      menu?.classList.toggle("hidden");
    });
  };

  const userDataFn = (id: string) => {
    const root = document.getElementById(id);

    if (!root) return;

    const editButton = root.querySelector(`[${ATTRIBUTES["data-user-edit"]}]`);
    const editForm = root.querySelector(
      `[${ATTRIBUTES["data-user-edit-form"]}]`,
    );
    const dataShow = root.querySelector(`[${ATTRIBUTES["data-user-show"]}]`);
    const returnButton = root.querySelector(
      `[${ATTRIBUTES["data-user-edit-return"]}]`,
    );

    editButton?.addEventListener("click", function () {
      editForm?.classList.remove("hidden");
      dataShow?.classList.add("hidden");
    });

    returnButton?.addEventListener("click", function () {
      editForm?.classList.add("hidden");
      dataShow?.classList.remove("hidden");
    });
  };

  useEffect(() => {
    tabsFn(tabsData);
    userDataFn(tabsData.userDataId);
  }, [tabsData]);

  return <div data-my-account-js />;
}

export default MyAccountJS;

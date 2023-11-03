import { useEffect } from "preact/hooks";
import type { UserData as UserDataType } from "../../sections/MyAccount.tsx";

export interface Props {
  tabsData: {
    rootId: string;
    tabContainerId: string;
    menuId: string;
  };
  userData: {
    title: string;
    data: UserDataType;
  };
}

const ATTRIBUTES = {
  "data-tab": "data-tab",
  "data-tab-content": "data-tab-content",
  "data-tab-menu-item": "data-tab-menu-item",
  "data-tab-menu-target": "data-tab-menu-target",
};

function MyAccountJS({ tabsData, userData }: Props) {
  const tabsFn = ({ rootId, tabContainerId, menuId }: Props["tabsData"]) => {
    console.log(rootId, tabContainerId, menuId);
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

    const drawer = document.getElementsByClassName("my-custom-drawer")[0];
    const menu = document.getElementById(menuId);
    drawer?.addEventListener("click", function () {
      menu?.classList.toggle("hidden");
    });
  };

  const userDataFn = ({ title, data }) => {
    let editButton = document.getElementById("user-data-edit");
    let editForm = document.getElementById("user-data-edit-form");
    let dataShow = document.getElementById("user-data-show");
    let returnButton = document.getElementById("user-data-edit-return");

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
    userDataFn(userData);
  }, [tabsData, userData]);

  return <div data-my-account-js />;
}

export default MyAccountJS;

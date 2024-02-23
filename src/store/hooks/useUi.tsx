import { uiStore } from "../zustand";

const useUi = () => {
  const {
    navBar: navBarUi,
    emailUi,
    isValidEmail,
    clipboardUi,
  } = uiStore((state) => ({
    navBar: state.navBar,
    emailUi: state.email,
    isValidEmail: state.isValidEmail,
    clipboardUi: state.clipboard,
  }));

  const { setNavBar, setEmail, setIsValidEmail, setClipboard } = uiStore();

  return {
    navBarUi,
    emailUi,
    isValidEmail,
    clipboardUi,
    setEmail,
    setNavBar,
    setIsValidEmail,
    setClipboard,
  };
};
export default useUi;
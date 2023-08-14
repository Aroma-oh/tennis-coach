import ReactDOM from "react-dom";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrateRoot(
    document.getElementById("page-view"),
    <Page {...pageProps} />,
  );
}

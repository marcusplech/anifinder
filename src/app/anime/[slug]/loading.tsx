export default function AnimeLoading() {
  return (
    <div className="singlepage-content">
      <div className="header-wrap">
        <div className="banner">
          <div className="shadow" />
        </div>
        <div className="header-single">
          <div className="container-single animate-pulse">
            <div className="cover-wrap">
              <div className="posterImage" style={{ height: 303 }} />
            </div>
            <div className="content-single">
              <div style={{ height: 24, width: "40%", background: "#d4deea", borderRadius: 4 }} />
              <div
                style={{
                  marginTop: 12,
                  height: 70,
                  width: "100%",
                  background: "#d4deea",
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

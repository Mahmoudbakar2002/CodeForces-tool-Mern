import "../../styles/profile-view.css";

export default function ProfileView(props) {
  const { loadding, handle, avatar, country, city, organization, rank } = props;
  const loaddingDiv = (width) => (
    <div className="loading-field" style={{ width }}></div>
  );

  const country_city = (country || "") + (country ? "," : "") + (city || "");
  return (
    <div className="profile-view">
      {loadding ? (
        <div className="profile-img">
          <div className="loadding-arc" />
        </div>
      ) : (
        <img
          className="profile-img"
          src={avatar || "https://cdn-userpic.codeforces.com/no-title.jpg"}
          alt="profile"
        />
      )}
      {loadding ? (
        loaddingDiv("200px")
      ) : (
        <h4 className={rank || ""}> {handle || "UNKOWN"}</h4>
      )}
      <br />
      <div className="mutedText">
        {loadding ? loaddingDiv("150px") : country_city}
        {country_city || loadding ? <br /> : ""}
        {/* <br /> */}
        {loadding ? loaddingDiv("100px") : organization}
      </div>
    </div>
  );
}

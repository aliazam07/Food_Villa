import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
}) => {
  return (
    <>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
      </>
  );
};

export default RestrauntCard;
/* eslint-disable react/prop-types */

export const Product = ({ image, name, price }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <a  className="group block">
        <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-200">
          <img
            src={image}
            alt={name}
            className="object-cover object-center w-full h-full transition-opacity duration-300 transform group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$ {price}</p>
      </a>
    </div>
  );
};

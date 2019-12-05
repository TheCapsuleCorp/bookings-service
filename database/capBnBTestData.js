const allListings = require('./allListings.json');
const testData = JSON.parse(allListings);

module.exports = testData.map((data, i) => {
  const x = {
    id: data.listing.id,
    roomId: 11111111 + i,
    city: 'Jacksonville',
    has_availability: data.listing.has_availability,
    min_nights: data.listing.min_nights,
    max_night: data.listing.max_night,
    currency: data.listing.currency,
    person_capacity: data.listing.person_capacity,
    price: data.listing.price,
    listing_weekend_price_native: data.listing.listing_weekend_price_native,
    cleaning_fee_native: data.listing.cleaning_fee_native,
    star_rating: data.listing.star_rating,
    weekly_price_factor: data.listing.weekly_price_factor,
    reviews_count: data.listing.reviews_count,
    listing_price_for_extra_person_native: data.listing.listing_price_for_extra_person_native,
    daysAvailable: data.listing.daysAvailable,
  };
  return x;
});

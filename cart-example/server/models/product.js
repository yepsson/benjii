module.exports = mongoose.model('Product', new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  price: Number,
  vat: Number,
  image: String,
  artnr: {type: String, unique: true}
}));

class Item
  include Mongoid::Document

  # fields
  field :item_name, type: String
  field :item_price, type: String #maybe this should be a decimal fixnum? (Matt)
  field :item_description, type: String
  field :item_tags, type: String

  # relationships
  has_and_belongs_to_one :user
  # double check this is a correct relationship syntax for MongoID (Matt)

end
class Items
  include Mongoid::Document
  field :item_group, type: String

  has_many :items
end
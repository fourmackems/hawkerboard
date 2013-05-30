class User
  include Mongoid::Document

  # fields
  field :username, type: String
  field :password, type: String

  # relationships
  has_many :items

end

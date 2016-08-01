class User < ApplicationRecord
  has_many :skills
  has_secure_password
end

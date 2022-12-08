class Agent < ApplicationRecord
    has_many :contracts
    has_many :sellers, through: :contracts
end

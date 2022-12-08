class Agency < ApplicationRecord
    has_many :users
    has_many :agents
    has_many :clients
    
end

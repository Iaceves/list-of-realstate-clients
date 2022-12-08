class Contract < ApplicationRecord
    belongs_to :agent
    belongs_to :seller
end

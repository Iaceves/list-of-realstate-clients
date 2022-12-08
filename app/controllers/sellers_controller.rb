class SellersController < ApplicationController
  def index
    render json: Seller.all, status: :ok
  end

  def create
    agent_id = params[:agent_id]
    price = params[:price]
    seller = Seller.create(my_params)
    Contract.create!(seller_id: seller.id, agent_id: agent_id, price: price)
    render json: seller, atatus: :created
  end

  def show
    seller = Seller.find(params[:id])
    render json: seller, status: :success
  end

  def destroy
    seller = Seller.find(params[:id])
    seller.destroy
    head :no_content
  end

  def update
    seller = Seller.find(params[:id])
    seller.update(my_params)
    render json: seller, status: :updated
  end

  private
  def my_params
    params.require(:seller).permit(:name, :address, :phone_number, :agent_id, :price)
    # params.permit(:name, :address, :phone_number, :agent_id, :price)
  end

end

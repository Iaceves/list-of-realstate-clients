class ContractsController < ApplicationController
  def index
    render json: Contract.all, status: :ok
  end

  def create
    contract = Contract.create(my_params)
    render json: contract, atatus: :created
  end

  def show
    contract = Contract.find(params[:id])
    render json: contract, status: :success
  end

  def delete
    contract = Contract.find(params[:id])
    contract.destroy
    head :no_content
  end

  def update
    contract = Contract.find(params[:id])
    contract.update(my_params)
    render json: contract, status: :updated
  end

  private
  def my_params
    params.permit(:seller_id, :agent_id, :price)
  end
end

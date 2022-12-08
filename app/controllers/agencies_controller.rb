class AgenciesController < ApplicationController
  def index
    render json: Agencies.all, status: :ok
  end

  def create
    agency = Agency.create(my_params)
    render json: agency, atatus: :created
  end

  def show
    agency = Agency.find(params[:id])
    render json: agency, status: :success
  end

  def delete
    agency = Agency.find(params[:id])
    agency.destroy
    head :no_content
  end

  def update
    agency = Agency.find(params[:id])
    agency.update(my_params)
    render json: agency, status: :updated
  end

  private

  def my_params
    params.require(:agency).permit(:address, :company_name)
  end
end

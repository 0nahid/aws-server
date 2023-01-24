import { Request, Response } from "express";
import { ProductModel } from "../models/products.model";

// post data
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// get all data
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// get single data
const getAProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const productsRouter = { createProduct, getAllProducts, getAProduct };

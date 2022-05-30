import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
	const [user] = useAuthState(auth);
  const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm();
  
  const onSubmit = async data => {
		const name = data.name;
		const email = user?.email;
		const price = data.price;
		const quantity = parseInt(data.quantity);
		const vendor = data.vendor;
		const details = data.detail;
		const image = data.image;
		const addItemData = {
			name,
			email,
			price,
			quantity,
			vendor,
			details,
			image,
		};
    // Send to Database
    fetch('http://localhost:5000/product/additem', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addItemData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged) {
        toast.success('New Item added successful.');
				reset();
      } else {
        toast.error('Failed to add new item!!');
      }
    })
}

	return (
		<div className="w-4/5 mx-auto py-6">
			<h2 className="text-2xl font-semibold text-center capitalize">Add Item</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 mx-auto">
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Product Name</span>
					</label>
					<input
						{...register("name", {
							required: {
								value: true,
								message: "Product name is required.",
							},
						})}
						type="text"
            name="name"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.name?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.name.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Product Price</span>
					</label>
					<input
						{...register("price", {
							required: {
								value: true,
								message: "Product price is required.",
							},
						})}
						type="number"
            name="price"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.price?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.price.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Product Quantity</span>
					</label>
					<input
						{...register("quantity", {
							required: {
								value: true,
								message: "Product quantity is required.",
							},
						})}
						type="number"
            name="quantity"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.quantity?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.quantity.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Vendor</span>
					</label>
					<input
						{...register("vendor", {
							required: {
								value: true,
								message: "Vendor name is required.",
							},
						})}
						type="text"
            name="vendor"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.vendor?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.vendor.message}
							</span>
						)}
					</label>
				</div>
				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Product Description</span>
					</label>
					<textarea
						{...register("detail", {
							required: {
								value: true,
								message: "Product description is required.",
							},
						})}
						type="text"
            name="detail"
						className="textarea textarea-bordered w-full"
					/>
					<label className="label">
						{errors.detail?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.detail.message}
							</span>
						)}
					</label>
				</div>
        <div className="form-control w-full">
					<label className="label">
						<span className="label-text">Product Image</span>
					</label>
					<input
						{...register("image", {
							required: {
								value: true,
								message: "Product image is required.",
							},
						})}
						type="text"
            name="image"
            placeholder="Image url"
						className="input input-bordered w-full"
					/>
					<label className="label">
						{errors.image?.type === "required" && (
							<span className="label-text-alt text-red-500">
								{errors.image.message}
							</span>
						)}
					</label>
				</div>
				<input
					type="submit"
					value="Add Now"
					className="input bg-neutral text-base-100 uppercase cursor-pointer w-full input-bordered"
				/>
			</form>
		</div>
	);
};

export default AddItem;

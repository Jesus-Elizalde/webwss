import { Combobox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { ProtectedAdminLayout } from "~/components/Layouts/protectedAdminLayout";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { api } from "~/utils/api";

const vendors = [
  { id: 1, name: "Adidas" },
  { id: 2, name: "Nike" },
  { id: 3, name: "Puma" },
  { id: 4, name: "New Balance" },
  { id: 5, name: "Umbro" },
];

const NewProduct = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [selectedVendor, setSelectedVendor] = useState(vendors[0]);
  const [vendorQuery, setVendorQuery] = useState("");
  const filteredVendor =
    vendorQuery === ""
      ? vendors
      : vendors.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(vendorQuery.toLowerCase().replace(/\s+/g, ""))
        );

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      void router.push("/admin/products");
    },
    onError: (err) => {
      console.log(err.data);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct.mutate({
      title,
      description,
      type,
      price,
      vendor: selectedVendor?.name as string,
      status: "ACTIVE",
    });
  };

  return (
    <ProtectedAdminLayout>
      <div className="flex flex-col gap-4 px-3 py-4">
        <div className="btn-sm btn w-14" onClick={() => router.back()}>
          Back
        </div>
        <div>Add product</div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="card-bordered card bg-base-200 p-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title:</span>
              </label>
              <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="22/23 Champions League Official Ball"
                className={`input-bordered input w-full`}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description:</span>
              </label>
              <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`textarea-bordered  textarea h-24`}
                placeholder="This product...."
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Type:</span>
              </label>
              <input
                name="title"
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Firm-Ground"
                className={`input-bordered input w-full`}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price:</span>
              </label>
              <input
                name="title"
                type="number"
                value={price}
                onChange={(e) => setPrice(+e.target.value)}
                placeholder="120.00"
                className={`input-bordered input w-full`}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Vendor:</span>
              </label>
              <div className="">
                <Combobox value={selectedVendor} onChange={setSelectedVendor}>
                  <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <Combobox.Input
                        className="input-bordered input w-full"
                        displayValue={(vendor: { name: string }) => vendor.name}
                        onChange={(event) => setVendorQuery(event.target.value)}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Combobox.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setVendorQuery("")}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredVendor.length === 0 && vendorQuery !== "" ? (
                          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                            Nothing found.
                          </div>
                        ) : (
                          filteredVendor.map((vendor) => (
                            <Combobox.Option
                              key={vendor.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-teal-600 text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={vendor}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {vendor.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? "text-white" : "text-teal-600"
                                      }`}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse border-t pt-2">
            <button className="btn-primary btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </ProtectedAdminLayout>
  );
};

export default NewProduct;

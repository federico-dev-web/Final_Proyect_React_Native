import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.EXPO_PUBLIC_realtime_database
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => "categories.json"
        }),
    
        getProducts: builder.query({
            query: () => "products.json"
        }),

        // ACCESO A LA IMAGEN EN LA BD
        getImage: builder.query({
            query: ( user ) => `image/${user}.json`,
        }),

        // ENVIA LA IMAGEN A LA BD
        putImage: builder.mutation({
            query: ( { image, user } ) => ({
                url: `image/${user}.json`,
                method: "PUT",
                body: { image }
            })
        }),

        // ACCESO A LA LOCATION EN LA BD
        getLocation: builder.query({
            query: ( user ) => `location/${user}.json`,
        }),

        // ENVIA LA LOCATION A LA BD
        putLocation: builder.mutation({
            query: ( { adress, user } ) => ({
                url: `location/${user}.json`,
                method: "PUT",
                body: { adress }
            })
        })
    })
});

export const { useGetCategoriesQuery, useGetProductsQuery, useGetImageQuery, usePutImageMutation, useGetLocationQuery, usePutLocationMutation } = ecommerceApi;
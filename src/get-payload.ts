import dotenv from "dotenv"
import path from "path"
import type {InitOptions}  from "payload/config"
import payload, { Payload } from "payload/dist"


dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

// const transporter = nodemailer.createTransport({
//     host: 'smtp.resend.com',
//     secure: true,
//     port: 465,
//     auth: {
//       user: 'resend',
//       pass: process.env.RESEND_API_KEY,
//     },
//   })

let cashed = (global as any).payload

if(!cashed) {
    cashed = (global as any).payload = {
        client: null,
        promise: null,
    }
}

interface Args {
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async({initOptions}: Args={}):Promise<Payload> => {
    if(!process.env.PAYLOAD_SECRET) {
        throw new Error("PAYLOAD_SECRET is missing.")
    }

    if(cashed.client) {
        return cashed.client
    }

    if(!cashed.promise) {
        cashed.promise = payload.init({
            // email: {
            //     transport: transporter,
            //     fromAddress: 'hello@joshtriedcoding.com',
            //     fromName: 'DigitalHippo',
            //   },
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        })
    }

    try {
        cashed.client = await cashed.promise
    } catch (e: unknown) {
        cashed.promise = null
        throw e
    }

    return cashed.client
}
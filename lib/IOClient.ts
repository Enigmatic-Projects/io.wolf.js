import type { IRequest } from "models.wolf.js";
import io from "socket.io-client";

export interface IIOClientOptions {
	/**
	 * The Server URL to connect to
	 * @default wss://v3.palringo.com
	 */
	ServerURL: "wss://v3-test.palringo.com" | "wss://v3-rc.palringo.com" | "wss://v3.palringo.com";

	/**
	 * Device Type
	 * @default web
	 */
	Device: "android" | "ios" | "web";

	/**
	 * Symbolises the client is using this as a connection that doesn't need an online state.
	 * @default false
	 */
	SecondaryConnection: "true" | "false";

	/**
	 * Sybolises the client requires a server-side ping emitted to stop the connection from breaking
	 * @default false
	 */
	IdlePing: "true" | "false";
}

export default class IOClient {
	Conn: SocketIOClient.Socket;

	/**
	 * Socket.IO Client for WOLF.JS
	 * @param token The token to use for this connection
	 * @param opts Any options to configure
	 */
	constructor(token: string, opts?: Partial<IIOClientOptions>) {
		this.Conn = io(opts?.ServerURL ?? "wss://v3.palringo.com", {
			transports: ["websocket"],
			query: {
				token,
				device: opts?.Device ?? "web",
				secondaryConnection: opts?.SecondaryConnection ?? "false",
				idlePing: opts?.IdlePing ?? "true",
			},
		});
	}

	/**
	 * Adds a listener for a particular event. Calling multiple times will add multiple listeners
	 * @param event The event that we're listening for
	 * @param fn The function to call when we get the event. Parameters depend on the event in question
	 * @returns This IOClient
	 */
	On = <T>(event: string, fn: (data: T) => any): IOClient => {
		this.Conn.on(event, fn);
		return this;
	}

	/**
	 * Adds a listener for a particular event that will be invoked a single time before being automatically removed
	 * @param event The event that we're listening for
	 * @param fn The function to call when we get the event. Parameters depend on the event in question
	 * @returns This IOClient
	 */
	Once = <T>(event: string, fn: (data: T) => any): IOClient => {
		this.Conn.once(event, fn);
		return this;
	}

	/**
	 * Removes a listener for a particular type of event. This will either remove a specific listener, or all listeners for this type of event
	 * @param event The event that we want to remove the listener of
	 * @param fn The function to remove, or null if we want to remove all functions
	 * @returns This IOClient
	 */
	Off = <T>(event: string, fn?: (data: T) => any): IOClient => {
		this.Conn.off(event, fn);
		return this;
	}

	/**
	 * Send a Request of type Req to WOLF, and expect a Resp of type Res back
	 * @param event the name of request to send
	 * @param data the data to send for the request
	 * @returns Response of type Res
	 */
  	Emit = <Req extends IRequest>( event: string, data?: Req) => new Promise((resolve, reject) => {
		this.Conn.emit(event, data, (resp) => {
			if (resp.code >= 200 && resp.code <= 299) resolve(resp);
			reject(resp);
		});
	});
}

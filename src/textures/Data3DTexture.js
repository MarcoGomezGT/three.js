import { Texture } from './Texture.js';
import { ClampToEdgeWrapping, NearestFilter } from '../constants.js';

class Data3DTexture extends Texture {

	constructor( data = null, width = 1, height = 1, depth = 1 ) {

		// We're going to add .setXXX() methods for setting properties later.
		// Users can still set in DataTexture3D directly.
		//
		//	const texture = new DataTexture3D( data, width, height, depth );
		// 	texture.anisotropy = 16;
		//
		// See #14839

		super( null );

		this.image = { data, width, height, depth };

		this.magFilter = NearestFilter;
		this.minFilter = NearestFilter;

		this.wrapR = ClampToEdgeWrapping;

		this.generateMipmaps = false;
		this.flipY = false;
		this.unpackAlignment = 1;

	}

}

Data3DTexture.prototype.isData3DTexture = true;

export { Data3DTexture };

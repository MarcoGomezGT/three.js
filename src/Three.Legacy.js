import { Audio } from './audio/Audio.js';
import { AudioAnalyser } from './audio/AudioAnalyser.js';
import { PerspectiveCamera } from './cameras/PerspectiveCamera.js';
import {
	FlatShading,
	sRGBEncoding,
	LinearEncoding,
	StaticDrawUsage,
	DynamicDrawUsage,
	TrianglesDrawMode
} from './constants.js';
import {
	Float64BufferAttribute,
	Float32BufferAttribute,
	Uint32BufferAttribute,
	Int32BufferAttribute,
	Uint16BufferAttribute,
	Int16BufferAttribute,
	Uint8ClampedBufferAttribute,
	Uint8BufferAttribute,
	Int8BufferAttribute,
	BufferAttribute
} from './core/BufferAttribute.js';
import { BufferGeometry } from './core/BufferGeometry.js';
import { InterleavedBuffer } from './core/InterleavedBuffer.js';
import { Object3D } from './core/Object3D.js';
import { Uniform } from './core/Uniform.js';
import { Curve } from './extras/core/Curve.js';
import { Path } from './extras/core/Path.js';
import { AxesHelper } from './helpers/AxesHelper.js';
import { BoxHelper } from './helpers/BoxHelper.js';
import { GridHelper } from './helpers/GridHelper.js';
import { SkeletonHelper } from './helpers/SkeletonHelper.js';
import { EdgesGeometry } from './geometries/EdgesGeometry.js';
import { ExtrudeGeometry } from './geometries/ExtrudeGeometry.js';
import { ShapeGeometry } from './geometries/ShapeGeometry.js';
import { WireframeGeometry } from './geometries/WireframeGeometry.js';
import { Light } from './lights/Light.js';
import { Loader } from './loaders/Loader.js';
import { LoaderUtils } from './loaders/LoaderUtils.js';
import { FileLoader } from './loaders/FileLoader.js';
import { AudioLoader } from './loaders/AudioLoader.js';
import { CubeTextureLoader } from './loaders/CubeTextureLoader.js';
import { DataTextureLoader } from './loaders/DataTextureLoader.js';
import { TextureLoader } from './loaders/TextureLoader.js';
import { Material } from './materials/Material.js';
import { LineBasicMaterial } from './materials/LineBasicMaterial.js';
import { PointsMaterial } from './materials/PointsMaterial.js';
import { ShaderMaterial } from './materials/ShaderMaterial.js';
import { Box2 } from './math/Box2.js';
import { Box3 } from './math/Box3.js';
import { Euler } from './math/Euler.js';
import { Sphere } from './math/Sphere.js';
import { Color } from './math/Color.js';
import { Frustum } from './math/Frustum.js';
import { Line3 } from './math/Line3.js';
import * as MathUtils from './math/MathUtils.js';
import { Matrix3 } from './math/Matrix3.js';
import { Matrix4 } from './math/Matrix4.js';
import { Plane } from './math/Plane.js';
import { Quaternion } from './math/Quaternion.js';
import { Ray } from './math/Ray.js';
import { Triangle } from './math/Triangle.js';
import { Vector2 } from './math/Vector2.js';
import { Vector3 } from './math/Vector3.js';
import { Vector4 } from './math/Vector4.js';
import { Mesh } from './objects/Mesh.js';
import { LineSegments } from './objects/LineSegments.js';
import { Points } from './objects/Points.js';
import { Sprite } from './objects/Sprite.js';
import { SkinnedMesh } from './objects/SkinnedMesh.js';
import { WebGLRenderer } from './renderers/WebGLRenderer.js';
import { WebGLRenderTarget } from './renderers/WebGLRenderTarget.js';
import { WebGLCubeRenderTarget } from './renderers/WebGLCubeRenderTarget.js';
import { WebGLShadowMap } from './renderers/webgl/WebGLShadowMap.js';
import { ImageUtils } from './extras/ImageUtils.js';
import { Shape } from './extras/core/Shape.js';
import { CubeCamera } from './cameras/CubeCamera.js';
import { Scene } from './scenes/Scene.js';
import { DataArrayTexture } from './textures/DataArrayTexture.js';
import { Data3DTexture } from './textures/Data3DTexture.js';

export { MathUtils as Math };

export const LineStrip = 0;
export const LinePieces = 1;
export const NoColors = 0;
export const FaceColors = 1;
export const VertexColors = 2;

export function MeshFaceMaterial( materials ) {

	console.warn( 'MeshFaceMaterial has been removed. Use an Array instead.' );
	return materials;

}

export function MultiMaterial( materials = [] ) {

	console.warn( 'MultiMaterial has been removed. Use an Array instead.' );
	materials.isMultiMaterial = true;
	materials.materials = materials;
	materials.clone = function () {

		return materials.slice();

	};

	return materials;

}

export class PointCloud extends Points {

	constructor( geometry, material ) {

		console.warn( 'PointCloud has been renamed to Points.' );
		super( geometry, material );

	}

}

export class Particle extends Sprite {

	constructor( material ) {

		console.warn( 'Particle has been renamed to Sprite.' );
		super( material );

	}

}

export class ParticleSystem extends Points {

	constructor( geometry, material ) {

		console.warn( 'ParticleSystem has been renamed to Points.' );
		super( geometry, material );

	}

}

export class PointCloudMaterial extends PointsMaterial {

	constructor( parameters ) {

		console.warn( 'PointCloudMaterial has been renamed to PointsMaterial.' );
		super( parameters );

	}

}

export class ParticleBasicMaterial extends PointsMaterial {

	constructor( parameters ) {

		console.warn( 'ParticleBasicMaterial has been renamed to PointsMaterial.' );
		super( parameters );

	}

}

export class ParticleSystemMaterial extends PointsMaterial {

	constructor( parameters ) {

		console.warn( 'ParticleSystemMaterial has been renamed to PointsMaterial.' );
		super( parameters );

	}

}

export class Vertex extends Vector3 {

	constructor( x, y, z ) {

		console.warn( 'Vertex has been removed. Use Vector3 instead.' );
		super( x, y, z );

	}

}

//

export class DynamicBufferAttribute extends BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'DynamicBufferAttribute has been removed. Use new BufferAttribute().setUsage( DynamicDrawUsage ) instead.' );
		super( array, itemSize );
		this.setUsage( DynamicDrawUsage );

	}

}

export class Int8Attribute extends Int8BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Int8Attribute has been removed. Use new Int8BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Uint8Attribute extends Uint8BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Uint8Attribute has been removed. Use new Uint8BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Uint8ClampedAttribute extends Uint8ClampedBufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Uint8ClampedAttribute has been removed. Use new Uint8ClampedBufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Int16Attribute extends Int16BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Int16Attribute has been removed. Use new Int16BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Uint16Attribute extends Uint16BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Uint16Attribute has been removed. Use new Uint16BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Int32Attribute extends Int32BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Int32Attribute has been removed. Use new Int32BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Uint32Attribute extends Uint32BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Uint32Attribute has been removed. Use new Uint32BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Float32Attribute extends Float32BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Float32Attribute has been removed. Use new Float32BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

export class Float64Attribute extends Float64BufferAttribute {

	constructor( array, itemSize ) {

		console.warn( 'Float64Attribute has been removed. Use new Float64BufferAttribute() instead.' );
		super( array, itemSize );

	}

}

//

Curve.create = function ( construct, getPoint ) {

	console.log( 'Curve.create() has been deprecated' );

	construct.prototype = Object.create( Curve.prototype );
	construct.prototype.constructor = construct;
	construct.prototype.getPoint = getPoint;

	return construct;

};

//

Path.prototype.fromPoints = function ( points ) {

	console.warn( 'Path: .fromPoints() has been renamed to .setFromPoints().' );
	return this.setFromPoints( points );

};

//

export class AxisHelper extends AxesHelper {

	constructor( size ) {

		console.warn( 'AxisHelper has been renamed to AxesHelper.' );
		super( size );

	}

}

export class BoundingBoxHelper extends BoxHelper {

	constructor( object, color ) {

		console.warn( 'BoundingBoxHelper has been deprecated. Creating a BoxHelper instead.' );
		super( object, color );

	}

}

export class EdgesHelper extends LineSegments {

	constructor( object, hex ) {

		console.warn( 'EdgesHelper has been removed. Use EdgesGeometry instead.' );
		super( new EdgesGeometry( object.geometry ), new LineBasicMaterial( { color: hex !== undefined ? hex : 0xffffff } ) );

	}

}

GridHelper.prototype.setColors = function () {

	console.error( 'GridHelper: setColors() has been deprecated, pass them in the constructor instead.' );

};

SkeletonHelper.prototype.update = function () {

	console.error( 'SkeletonHelper: update() no longer needs to be called.' );

};

export class WireframeHelper extends LineSegments {

	constructor( object, hex ) {

		console.warn( 'WireframeHelper has been removed. Use WireframeGeometry instead.' );
		super( new WireframeGeometry( object.geometry ), new LineBasicMaterial( { color: hex !== undefined ? hex : 0xffffff } ) );

	}

}

//

Loader.prototype.extractUrlBase = function ( url ) {

	console.warn( 'Loader: .extractUrlBase() has been deprecated. Use LoaderUtils.extractUrlBase() instead.' );
	return LoaderUtils.extractUrlBase( url );

};

Loader.Handlers = {

	add: function ( /* regex, loader */ ) {

		console.error( 'Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.' );

	},

	get: function ( /* file */ ) {

		console.error( 'Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.' );

	}

};

export class XHRLoader extends FileLoader {

	constructor( manager ) {

		console.warn( 'XHRLoader has been renamed to FileLoader.' );
		super( manager );

	}

}

export class BinaryTextureLoader extends DataTextureLoader {

	constructor( manager ) {

		console.warn( 'BinaryTextureLoader has been renamed to DataTextureLoader.' );
		super( manager );

	}

}

//

Box2.prototype.center = function ( optionalTarget ) {

	console.warn( 'Box2: .center() has been renamed to .getCenter().' );
	return this.getCenter( optionalTarget );

};

Box2.prototype.empty = function () {

	console.warn( 'Box2: .empty() has been renamed to .isEmpty().' );
	return this.isEmpty();

};

Box2.prototype.isIntersectionBox = function ( box ) {

	console.warn( 'Box2: .isIntersectionBox() has been renamed to .intersectsBox().' );
	return this.intersectsBox( box );

};

Box2.prototype.size = function ( optionalTarget ) {

	console.warn( 'Box2: .size() has been renamed to .getSize().' );
	return this.getSize( optionalTarget );

};

//

Box3.prototype.center = function ( optionalTarget ) {

	console.warn( 'Box3: .center() has been renamed to .getCenter().' );
	return this.getCenter( optionalTarget );

};

Box3.prototype.empty = function () {

	console.warn( 'Box3: .empty() has been renamed to .isEmpty().' );
	return this.isEmpty();

};

Box3.prototype.isIntersectionBox = function ( box ) {

	console.warn( 'Box3: .isIntersectionBox() has been renamed to .intersectsBox().' );
	return this.intersectsBox( box );

};

Box3.prototype.isIntersectionSphere = function ( sphere ) {

	console.warn( 'Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().' );
	return this.intersectsSphere( sphere );

};

Box3.prototype.size = function ( optionalTarget ) {

	console.warn( 'Box3: .size() has been renamed to .getSize().' );
	return this.getSize( optionalTarget );

};

//

Euler.prototype.toVector3 = function () {

	console.error( 'Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead' );

};


//

Sphere.prototype.empty = function () {

	console.warn( 'Sphere: .empty() has been renamed to .isEmpty().' );
	return this.isEmpty();

};

//

Frustum.prototype.setFromMatrix = function ( m ) {

	console.warn( 'Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().' );
	return this.setFromProjectionMatrix( m );

};

//

Line3.prototype.center = function ( optionalTarget ) {

	console.warn( 'Line3: .center() has been renamed to .getCenter().' );
	return this.getCenter( optionalTarget );

};

//

Matrix3.prototype.flattenToArrayOffset = function ( array, offset ) {

	console.warn( 'Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.' );
	return this.toArray( array, offset );

};

Matrix3.prototype.multiplyVector3 = function ( vector ) {

	console.warn( 'Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.' );
	return vector.applyMatrix3( this );

};

Matrix3.prototype.multiplyVector3Array = function ( /* a */ ) {

	console.error( 'Matrix3: .multiplyVector3Array() has been removed.' );

};

Matrix3.prototype.applyToBufferAttribute = function ( attribute ) {

	console.warn( 'Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.' );
	return attribute.applyMatrix3( this );

};

Matrix3.prototype.applyToVector3Array = function ( /* array, offset, length */ ) {

	console.error( 'Matrix3: .applyToVector3Array() has been removed.' );

};

Matrix3.prototype.getInverse = function ( matrix ) {

	console.warn( 'Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.' );
	return this.copy( matrix ).invert();

};

//

Matrix4.prototype.extractPosition = function ( m ) {

	console.warn( 'Matrix4: .extractPosition() has been renamed to .copyPosition().' );
	return this.copyPosition( m );

};

Matrix4.prototype.flattenToArrayOffset = function ( array, offset ) {

	console.warn( 'Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.' );
	return this.toArray( array, offset );

};

Matrix4.prototype.getPosition = function () {

	console.warn( 'Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.' );
	return new Vector3().setFromMatrixColumn( this, 3 );

};

Matrix4.prototype.setRotationFromQuaternion = function ( q ) {

	console.warn( 'Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().' );
	return this.makeRotationFromQuaternion( q );

};

Matrix4.prototype.multiplyToArray = function () {

	console.warn( 'Matrix4: .multiplyToArray() has been removed.' );

};

Matrix4.prototype.multiplyVector3 = function ( vector ) {

	console.warn( 'Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
	return vector.applyMatrix4( this );

};

Matrix4.prototype.multiplyVector4 = function ( vector ) {

	console.warn( 'Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
	return vector.applyMatrix4( this );

};

Matrix4.prototype.multiplyVector3Array = function ( /* a */ ) {

	console.error( 'Matrix4: .multiplyVector3Array() has been removed.' );

};

Matrix4.prototype.rotateAxis = function ( v ) {

	console.warn( 'Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.' );
	v.transformDirection( this );

};

Matrix4.prototype.crossVector = function ( vector ) {

	console.warn( 'Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
	return vector.applyMatrix4( this );

};

Matrix4.prototype.translate = function () {

	console.error( 'Matrix4: .translate() has been removed.' );

};

Matrix4.prototype.rotateX = function () {

	console.error( 'Matrix4: .rotateX() has been removed.' );

};

Matrix4.prototype.rotateY = function () {

	console.error( 'Matrix4: .rotateY() has been removed.' );

};

Matrix4.prototype.rotateZ = function () {

	console.error( 'Matrix4: .rotateZ() has been removed.' );

};

Matrix4.prototype.rotateByAxis = function () {

	console.error( 'Matrix4: .rotateByAxis() has been removed.' );

};

Matrix4.prototype.applyToBufferAttribute = function ( attribute ) {

	console.warn( 'Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.' );
	return attribute.applyMatrix4( this );

};

Matrix4.prototype.applyToVector3Array = function ( /* array, offset, length */ ) {

	console.error( 'Matrix4: .applyToVector3Array() has been removed.' );

};

Matrix4.prototype.makeFrustum = function ( left, right, bottom, top, near, far ) {

	console.warn( 'Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.' );
	return this.makePerspective( left, right, top, bottom, near, far );

};

Matrix4.prototype.getInverse = function ( matrix ) {

	console.warn( 'Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.' );
	return this.copy( matrix ).invert();

};

//

Plane.prototype.isIntersectionLine = function ( line ) {

	console.warn( 'Plane: .isIntersectionLine() has been renamed to .intersectsLine().' );
	return this.intersectsLine( line );

};

//

Quaternion.prototype.multiplyVector3 = function ( vector ) {

	console.warn( 'Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.' );
	return vector.applyQuaternion( this );

};

Quaternion.prototype.inverse = function ( ) {

	console.warn( 'Quaternion: .inverse() has been renamed to invert().' );
	return this.invert();

};

//

Ray.prototype.isIntersectionBox = function ( box ) {

	console.warn( 'Ray: .isIntersectionBox() has been renamed to .intersectsBox().' );
	return this.intersectsBox( box );

};

Ray.prototype.isIntersectionPlane = function ( plane ) {

	console.warn( 'Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().' );
	return this.intersectsPlane( plane );

};

Ray.prototype.isIntersectionSphere = function ( sphere ) {

	console.warn( 'Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().' );
	return this.intersectsSphere( sphere );

};

//

Triangle.prototype.area = function () {

	console.warn( 'Triangle: .area() has been renamed to .getArea().' );
	return this.getArea();

};

Triangle.prototype.barycoordFromPoint = function ( point, target ) {

	console.warn( 'Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().' );
	return this.getBarycoord( point, target );

};

Triangle.prototype.midpoint = function ( target ) {

	console.warn( 'Triangle: .midpoint() has been renamed to .getMidpoint().' );
	return this.getMidpoint( target );

};

Triangle.prototypenormal = function ( target ) {

	console.warn( 'Triangle: .normal() has been renamed to .getNormal().' );
	return this.getNormal( target );

};

Triangle.prototype.plane = function ( target ) {

	console.warn( 'Triangle: .plane() has been renamed to .getPlane().' );
	return this.getPlane( target );

};

Triangle.barycoordFromPoint = function ( point, a, b, c, target ) {

	console.warn( 'Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().' );
	return Triangle.getBarycoord( point, a, b, c, target );

};

Triangle.normal = function ( a, b, c, target ) {

	console.warn( 'Triangle: .normal() has been renamed to .getNormal().' );
	return Triangle.getNormal( a, b, c, target );

};

//

Shape.prototype.extractAllPoints = function ( divisions ) {

	console.warn( 'Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.' );
	return this.extractPoints( divisions );

};

Shape.prototype.extrude = function ( options ) {

	console.warn( 'Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.' );
	return new ExtrudeGeometry( this, options );

};

Shape.prototype.makeGeometry = function ( options ) {

	console.warn( 'Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.' );
	return new ShapeGeometry( this, options );

};

//

Vector2.prototype.fromAttribute = function ( attribute, index, offset ) {

	console.warn( 'Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().' );
	return this.fromBufferAttribute( attribute, index, offset );

};

Vector2.prototype.distanceToManhattan = function ( v ) {

	console.warn( 'Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().' );
	return this.manhattanDistanceTo( v );

};

Vector2.prototype.lengthManhattan = function () {

	console.warn( 'Vector2: .lengthManhattan() has been renamed to .manhattanLength().' );
	return this.manhattanLength();

};

//

Vector3.prototype.setEulerFromRotationMatrix = function () {

	console.error( 'Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.' );

};

Vector3.prototype.setEulerFromQuaternion = function () {

	console.error( 'Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.' );

};

Vector3.prototype.getPositionFromMatrix = function ( m ) {

	console.warn( 'Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().' );
	return this.setFromMatrixPosition( m );

};

Vector3.prototype.getScaleFromMatrix = function ( m ) {

	console.warn( 'Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().' );
	return this.setFromMatrixScale( m );

};

Vector3.prototype.getColumnFromMatrix = function ( index, matrix ) {

	console.warn( 'Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().' );
	return this.setFromMatrixColumn( matrix, index );

};

Vector3.prototype.applyProjection = function ( m ) {

	console.warn( 'Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.' );
	return this.applyMatrix4( m );

};

Vector3.prototype.fromAttribute = function ( attribute, index, offset ) {

	console.warn( 'Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().' );
	return this.fromBufferAttribute( attribute, index, offset );

};

Vector3.prototype.distanceToManhattan = function ( v ) {

	console.warn( 'Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().' );
	return this.manhattanDistanceTo( v );

};

Vector3.prototype.lengthManhattan = function () {

	console.warn( 'Vector3: .lengthManhattan() has been renamed to .manhattanLength().' );
	return this.manhattanLength();

};

//

Vector4.prototype.fromAttribute = function ( attribute, index, offset ) {

	console.warn( 'Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().' );
	return this.fromBufferAttribute( attribute, index, offset );

};

Vector4.prototype.lengthManhattan = function () {

	console.warn( 'Vector4: .lengthManhattan() has been renamed to .manhattanLength().' );
	return this.manhattanLength();

};

//

Object3D.prototype.getChildByName = function ( name ) {

	console.warn( 'Object3D: .getChildByName() has been renamed to .getObjectByName().' );
	return this.getObjectByName( name );

};

Object3D.prototype.renderDepth = function () {

	console.warn( 'Object3D: .renderDepth has been removed. Use .renderOrder, instead.' );

};

Object3D.prototype.translate = function ( distance, axis ) {

	console.warn( 'Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.' );
	return this.translateOnAxis( axis, distance );

};

Object3D.prototype.getWorldRotation = function () {

	console.error( 'Object3D: .getWorldRotation() has been removed. Use Object3D.getWorldQuaternion( target ) instead.' );

};

Object3D.prototype.applyMatrix = function ( matrix ) {

	console.warn( 'Object3D: .applyMatrix() has been renamed to .applyMatrix4().' );
	return this.applyMatrix4( matrix );

};

Object.defineProperties( Object3D.prototype, {

	eulerOrder: {
		get: function () {

			console.warn( 'Object3D: .eulerOrder is now .rotation.order.' );
			return this.rotation.order;

		},
		set: function ( value ) {

			console.warn( 'Object3D: .eulerOrder is now .rotation.order.' );
			this.rotation.order = value;

		}
	},
	useQuaternion: {
		get: function () {

			console.warn( 'Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

		},
		set: function () {

			console.warn( 'Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

		}
	}

} );

Mesh.prototype.setDrawMode = function () {

	console.error( 'Mesh: .setDrawMode() has been removed. The renderer now always assumes TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.' );

};

Object.defineProperties( Mesh.prototype, {

	drawMode: {
		get: function () {

			console.error( 'Mesh: .drawMode has been removed. The renderer now always assumes TrianglesDrawMode.' );
			return TrianglesDrawMode;

		},
		set: function () {

			console.error( 'Mesh: .drawMode has been removed. The renderer now always assumes TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.' );

		}
	}

} );

SkinnedMesh.prototype.initBones = function () {

	console.error( 'SkinnedMesh: initBones() has been removed.' );

};

//

PerspectiveCamera.prototype.setLens = function ( focalLength, filmGauge ) {

	console.warn( 'PerspectiveCamera.setLens is deprecated. ' +
			'Use .setFocalLength and .filmGauge for a photographic setup.' );

	if ( filmGauge !== undefined ) this.filmGauge = filmGauge;
	this.setFocalLength( focalLength );

};

//

Object.defineProperties( Light.prototype, {
	onlyShadow: {
		set: function () {

			console.warn( 'Light: .onlyShadow has been removed.' );

		}
	},
	shadowCameraFov: {
		set: function ( value ) {

			console.warn( 'Light: .shadowCameraFov is now .shadow.camera.fov.' );
			this.shadow.camera.fov = value;

		}
	},
	shadowCameraLeft: {
		set: function ( value ) {

			console.warn( 'Light: .shadowCameraLeft is now .shadow.camera.left.' );
			this.shadow.camera.left = value;

		}
	},
	shadowCameraRight: {
		set: function ( value ) {

			console.warn( 'Light: .shadowCameraRight is now .shadow.camera.right.' );
			this.shadow.camera.right = value;

		}
	},
	shadowCameraTop: {
		set: function ( value ) {

			console.warn( 'Light: .shadowCameraTop is now .shadow.camera.top.' );
			this.shadow.camera.top = value;

		}
	},
	shadowCameraBottom: {
		set: function ( value ) {

			console.warn( 'Light: .shadowCameraBottom is now .shadow.camera.bottom.' );
			this.shadow.camera.bottom = value;

		}
	},
	shadowCameraNear: {
		set: function ( value ) {

			console.warn( 'Light: .shadowCameraNear is now .shadow.camera.near.' );
			this.shadow.camera.near = value;

		}
	},
	shadowCameraFar: {
		set: function ( value ) {

			console.warn( 'Light: .shadowCameraFar is now .shadow.camera.far.' );
			this.shadow.camera.far = value;

		}
	},
	shadowCameraVisible: {
		set: function () {

			console.warn( 'Light: .shadowCameraVisible has been removed. Use new CameraHelper( light.shadow.camera ) instead.' );

		}
	},
	shadowBias: {
		set: function ( value ) {

			console.warn( 'Light: .shadowBias is now .shadow.bias.' );
			this.shadow.bias = value;

		}
	},
	shadowDarkness: {
		set: function () {

			console.warn( 'Light: .shadowDarkness has been removed.' );

		}
	},
	shadowMapWidth: {
		set: function ( value ) {

			console.warn( 'Light: .shadowMapWidth is now .shadow.mapSize.width.' );
			this.shadow.mapSize.width = value;

		}
	},
	shadowMapHeight: {
		set: function ( value ) {

			console.warn( 'Light: .shadowMapHeight is now .shadow.mapSize.height.' );
			this.shadow.mapSize.height = value;

		}
	}
} );

//

Object.defineProperties( BufferAttribute.prototype, {

	length: {
		get: function () {

			console.warn( 'BufferAttribute: .length has been deprecated. Use .count instead.' );
			return this.array.length;

		}
	},
	dynamic: {
		get: function () {

			console.warn( 'BufferAttribute: .dynamic has been deprecated. Use .usage instead.' );
			return this.usage === DynamicDrawUsage;

		},
		set: function ( /* value */ ) {

			console.warn( 'BufferAttribute: .dynamic has been deprecated. Use .usage instead.' );
			this.setUsage( DynamicDrawUsage );

		}
	}

} );

BufferAttribute.prototype.setDynamic = function ( value ) {

	console.warn( 'BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.' );
	this.setUsage( value === true ? DynamicDrawUsage : StaticDrawUsage );
	return this;

};

BufferAttribute.prototype.copyIndicesArray = function ( /* indices */ ) {

	console.error( 'BufferAttribute: .copyIndicesArray() has been removed.' );

},

BufferAttribute.prototype.setArray = function ( /* array */ ) {

	console.error( 'BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers' );

};

//

BufferGeometry.prototype.addIndex = function ( index ) {

	console.warn( 'BufferGeometry: .addIndex() has been renamed to .setIndex().' );
	this.setIndex( index );

};

BufferGeometry.prototype.addAttribute = function ( name, attribute ) {

	console.warn( 'BufferGeometry: .addAttribute() has been renamed to .setAttribute().' );

	if ( ! ( attribute && attribute.isBufferAttribute ) && ! ( attribute && attribute.isInterleavedBufferAttribute ) ) {

		console.warn( 'BufferGeometry: .addAttribute() now expects ( name, attribute ).' );

		return this.setAttribute( name, new BufferAttribute( arguments[ 1 ], arguments[ 2 ] ) );

	}

	if ( name === 'index' ) {

		console.warn( 'BufferGeometry.addAttribute: Use .setIndex() for index attribute.' );
		this.setIndex( attribute );

		return this;

	}

	return this.setAttribute( name, attribute );

};

BufferGeometry.prototype.addDrawCall = function ( start, count, indexOffset ) {

	if ( indexOffset !== undefined ) {

		console.warn( 'BufferGeometry: .addDrawCall() no longer supports indexOffset.' );

	}

	console.warn( 'BufferGeometry: .addDrawCall() is now .addGroup().' );
	this.addGroup( start, count );

};

BufferGeometry.prototype.clearDrawCalls = function () {

	console.warn( 'BufferGeometry: .clearDrawCalls() is now .clearGroups().' );
	this.clearGroups();

};

BufferGeometry.prototype.computeOffsets = function () {

	console.warn( 'BufferGeometry: .computeOffsets() has been removed.' );

};

BufferGeometry.prototype.removeAttribute = function ( name ) {

	console.warn( 'BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().' );

	return this.deleteAttribute( name );

};

BufferGeometry.prototype.applyMatrix = function ( matrix ) {

	console.warn( 'BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().' );
	return this.applyMatrix4( matrix );

};

Object.defineProperties( BufferGeometry.prototype, {

	drawcalls: {
		get: function () {

			console.error( 'BufferGeometry: .drawcalls has been renamed to .groups.' );
			return this.groups;

		}
	},
	offsets: {
		get: function () {

			console.warn( 'BufferGeometry: .offsets has been renamed to .groups.' );
			return this.groups;

		}
	}

} );

InterleavedBuffer.prototype.setDynamic = function ( value ) {

	console.warn( 'InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.' );
	this.setUsage( value === true ? DynamicDrawUsage : StaticDrawUsage );
	return this;

};

InterleavedBuffer.prototype.setArray = function ( /* array */ ) {

	console.error( 'InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers' );

};

//

ExtrudeGeometry.prototype.getArrays = function () {

	console.error( 'ExtrudeGeometry: .getArrays() has been removed.' );

};

ExtrudeGeometry.prototype.addShapeList = function () {

	console.error( 'ExtrudeGeometry: .addShapeList() has been removed.' );

};

ExtrudeGeometry.prototype.addShape = function () {

	console.error( 'ExtrudeGeometry: .addShape() has been removed.' );

};

//

Scene.prototype.dispose = function () {

	console.error( 'Scene: .dispose() has been removed.' );

};

//

Uniform.prototype.onUpdate = function () {

	console.warn( 'Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.' );
	return this;

};

//

Object.defineProperties( Material.prototype, {

	wrapAround: {
		get: function () {

			console.warn( 'Material: .wrapAround has been removed.' );

		},
		set: function () {

			console.warn( 'Material: .wrapAround has been removed.' );

		}
	},

	overdraw: {
		get: function () {

			console.warn( 'Material: .overdraw has been removed.' );

		},
		set: function () {

			console.warn( 'Material: .overdraw has been removed.' );

		}
	},

	wrapRGB: {
		get: function () {

			console.warn( 'Material: .wrapRGB has been removed.' );
			return new Color();

		}
	},

	shading: {
		get: function () {

			console.error( '' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.' );

		},
		set: function ( value ) {

			console.warn( '' + this.type + ': .shading has been removed. Use the boolean .flatShading instead.' );
			this.flatShading = ( value === FlatShading );

		}
	},

	stencilMask: {
		get: function () {

			console.warn( '' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.' );
			return this.stencilFuncMask;

		},
		set: function ( value ) {

			console.warn( '' + this.type + ': .stencilMask has been removed. Use .stencilFuncMask instead.' );
			this.stencilFuncMask = value;

		}
	},

	vertexTangents: {
		get: function () {

			console.warn( '' + this.type + ': .vertexTangents has been removed.' );

		},
		set: function () {

			console.warn( '' + this.type + ': .vertexTangents has been removed.' );

		}
	},

} );

Object.defineProperties( ShaderMaterial.prototype, {

	derivatives: {
		get: function () {

			console.warn( 'ShaderMaterial: .derivatives has been moved to .extensions.derivatives.' );
			return this.extensions.derivatives;

		},
		set: function ( value ) {

			console.warn( ' ShaderMaterial: .derivatives has been moved to .extensions.derivatives.' );
			this.extensions.derivatives = value;

		}
	}

} );

//

WebGLRenderer.prototype.clearTarget = function ( renderTarget, color, depth, stencil ) {

	console.warn( 'WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.' );
	this.setRenderTarget( renderTarget );
	this.clear( color, depth, stencil );

};

WebGLRenderer.prototype.animate = function ( callback ) {

	console.warn( 'WebGLRenderer: .animate() is now .setAnimationLoop().' );
	this.setAnimationLoop( callback );

};

WebGLRenderer.prototype.getCurrentRenderTarget = function () {

	console.warn( 'WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().' );
	return this.getRenderTarget();

};

WebGLRenderer.prototype.getMaxAnisotropy = function () {

	console.warn( 'WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().' );
	return this.capabilities.getMaxAnisotropy();

};

WebGLRenderer.prototype.getPrecision = function () {

	console.warn( 'WebGLRenderer: .getPrecision() is now .capabilities.precision.' );
	return this.capabilities.precision;

};

WebGLRenderer.prototype.resetGLState = function () {

	console.warn( 'WebGLRenderer: .resetGLState() is now .state.reset().' );
	return this.state.reset();

};

WebGLRenderer.prototype.supportsFloatTextures = function () {

	console.warn( 'WebGLRenderer: .supportsFloatTextures() is now .extensions.get( \'OES_texture_float\' ).' );
	return this.extensions.get( 'OES_texture_float' );

};

WebGLRenderer.prototype.supportsHalfFloatTextures = function () {

	console.warn( 'WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( \'OES_texture_half_float\' ).' );
	return this.extensions.get( 'OES_texture_half_float' );

};

WebGLRenderer.prototype.supportsStandardDerivatives = function () {

	console.warn( 'WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( \'OES_standard_derivatives\' ).' );
	return this.extensions.get( 'OES_standard_derivatives' );

};

WebGLRenderer.prototype.supportsCompressedTextureS3TC = function () {

	console.warn( 'WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( \'WEBGL_compressed_texture_s3tc\' ).' );
	return this.extensions.get( 'WEBGL_compressed_texture_s3tc' );

};

WebGLRenderer.prototype.supportsCompressedTexturePVRTC = function () {

	console.warn( 'WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( \'WEBGL_compressed_texture_pvrtc\' ).' );
	return this.extensions.get( 'WEBGL_compressed_texture_pvrtc' );

};

WebGLRenderer.prototype.supportsBlendMinMax = function () {

	console.warn( 'WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( \'EXT_blend_minmax\' ).' );
	return this.extensions.get( 'EXT_blend_minmax' );

};

WebGLRenderer.prototype.supportsVertexTextures = function () {

	console.warn( 'WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.' );
	return this.capabilities.vertexTextures;

};

WebGLRenderer.prototype.supportsInstancedArrays = function () {

	console.warn( 'WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( \'ANGLE_instanced_arrays\' ).' );
	return this.extensions.get( 'ANGLE_instanced_arrays' );

};

WebGLRenderer.prototype.enableScissorTest = function ( boolean ) {

	console.warn( 'WebGLRenderer: .enableScissorTest() is now .setScissorTest().' );
	this.setScissorTest( boolean );

};

WebGLRenderer.prototype.initMaterial = function () {

	console.warn( 'WebGLRenderer: .initMaterial() has been removed.' );

};

WebGLRenderer.prototype.addPrePlugin = function () {

	console.warn( 'WebGLRenderer: .addPrePlugin() has been removed.' );

};

WebGLRenderer.prototype.addPostPlugin = function () {

	console.warn( 'WebGLRenderer: .addPostPlugin() has been removed.' );

};

WebGLRenderer.prototype.updateShadowMap = function () {

	console.warn( 'WebGLRenderer: .updateShadowMap() has been removed.' );

};

WebGLRenderer.prototype.setFaceCulling = function () {

	console.warn( 'WebGLRenderer: .setFaceCulling() has been removed.' );

};

WebGLRenderer.prototype.allocTextureUnit = function () {

	console.warn( 'WebGLRenderer: .allocTextureUnit() has been removed.' );

};

WebGLRenderer.prototype.setTexture = function () {

	console.warn( 'WebGLRenderer: .setTexture() has been removed.' );

};

WebGLRenderer.prototype.setTexture2D = function () {

	console.warn( 'WebGLRenderer: .setTexture2D() has been removed.' );

};

WebGLRenderer.prototype.setTextureCube = function () {

	console.warn( 'WebGLRenderer: .setTextureCube() has been removed.' );

};

WebGLRenderer.prototype.getActiveMipMapLevel = function () {

	console.warn( 'WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().' );
	return this.getActiveMipmapLevel();

};

Object.defineProperties( WebGLRenderer.prototype, {

	shadowMapEnabled: {
		get: function () {

			return this.shadowMap.enabled;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.' );
			this.shadowMap.enabled = value;

		}
	},
	shadowMapType: {
		get: function () {

			return this.shadowMap.type;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderer: .shadowMapType is now .shadowMap.type.' );
			this.shadowMap.type = value;

		}
	},
	shadowMapCullFace: {
		get: function () {

			console.warn( 'WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.' );
			return undefined;

		},
		set: function ( /* value */ ) {

			console.warn( 'WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.' );

		}
	},
	context: {
		get: function () {

			console.warn( 'WebGLRenderer: .context has been removed. Use .getContext() instead.' );
			return this.getContext();

		}
	},
	vr: {
		get: function () {

			console.warn( 'WebGLRenderer: .vr has been renamed to .xr' );
			return this.xr;

		}
	},
	gammaInput: {
		get: function () {

			console.warn( 'WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.' );
			return false;

		},
		set: function () {

			console.warn( 'WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.' );

		}
	},
	gammaOutput: {
		get: function () {

			console.warn( 'WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.' );
			return false;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.' );
			this.outputEncoding = ( value === true ) ? sRGBEncoding : LinearEncoding;

		}
	},
	toneMappingWhitePoint: {
		get: function () {

			console.warn( 'WebGLRenderer: .toneMappingWhitePoint has been removed.' );
			return 1.0;

		},
		set: function () {

			console.warn( 'WebGLRenderer: .toneMappingWhitePoint has been removed.' );

		}
	},
	gammaFactor: {
		get: function () {

			console.warn( 'WebGLRenderer: .gammaFactor has been removed.' );
			return 2;

		},
		set: function () {

			console.warn( 'WebGLRenderer: .gammaFactor has been removed.' );

		}
	}
} );

Object.defineProperties( WebGLShadowMap.prototype, {

	cullFace: {
		get: function () {

			console.warn( 'WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.' );
			return undefined;

		},
		set: function ( /* cullFace */ ) {

			console.warn( 'WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.' );

		}
	},
	renderReverseSided: {
		get: function () {

			console.warn( 'WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.' );
			return undefined;

		},
		set: function () {

			console.warn( 'WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.' );

		}
	},
	renderSingleSided: {
		get: function () {

			console.warn( 'WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.' );
			return undefined;

		},
		set: function () {

			console.warn( 'WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.' );

		}
	}

} );

export class WebGLRenderTargetCube extends WebGLCubeRenderTarget {

	constructor( width, height, options ) {

		console.warn( 'WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).' );
		super( width, options );

	}

}

//

Object.defineProperties( WebGLRenderTarget.prototype, {

	wrapS: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .wrapS is now .texture.wrapS.' );
			return this.texture.wrapS;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .wrapS is now .texture.wrapS.' );
			this.texture.wrapS = value;

		}
	},
	wrapT: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .wrapT is now .texture.wrapT.' );
			return this.texture.wrapT;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .wrapT is now .texture.wrapT.' );
			this.texture.wrapT = value;

		}
	},
	magFilter: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .magFilter is now .texture.magFilter.' );
			return this.texture.magFilter;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .magFilter is now .texture.magFilter.' );
			this.texture.magFilter = value;

		}
	},
	minFilter: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .minFilter is now .texture.minFilter.' );
			return this.texture.minFilter;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .minFilter is now .texture.minFilter.' );
			this.texture.minFilter = value;

		}
	},
	anisotropy: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .anisotropy is now .texture.anisotropy.' );
			return this.texture.anisotropy;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .anisotropy is now .texture.anisotropy.' );
			this.texture.anisotropy = value;

		}
	},
	offset: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .offset is now .texture.offset.' );
			return this.texture.offset;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .offset is now .texture.offset.' );
			this.texture.offset = value;

		}
	},
	repeat: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .repeat is now .texture.repeat.' );
			return this.texture.repeat;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .repeat is now .texture.repeat.' );
			this.texture.repeat = value;

		}
	},
	format: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .format is now .texture.format.' );
			return this.texture.format;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .format is now .texture.format.' );
			this.texture.format = value;

		}
	},
	type: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .type is now .texture.type.' );
			return this.texture.type;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .type is now .texture.type.' );
			this.texture.type = value;

		}
	},
	generateMipmaps: {
		get: function () {

			console.warn( 'WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.' );
			return this.texture.generateMipmaps;

		},
		set: function ( value ) {

			console.warn( 'WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.' );
			this.texture.generateMipmaps = value;

		}
	}

} );

//

Audio.prototype.load = function ( file ) {

	console.warn( 'Audio: .load has been deprecated. Use AudioLoader instead.' );
	const scope = this;
	const audioLoader = new AudioLoader();
	audioLoader.load( file, function ( buffer ) {

		scope.setBuffer( buffer );

	} );
	return this;

};


AudioAnalyser.prototype.getData = function () {

	console.warn( 'AudioAnalyser: .getData() is now .getFrequencyData().' );
	return this.getFrequencyData();

};

//

CubeCamera.prototype.updateCubeMap = function ( renderer, scene ) {

	console.warn( 'CubeCamera: .updateCubeMap() is now .update().' );
	return this.update( renderer, scene );

};

CubeCamera.prototype.clear = function ( renderer, color, depth, stencil ) {

	console.warn( 'CubeCamera: .clear() is now .renderTarget.clear().' );
	return this.renderTarget.clear( renderer, color, depth, stencil );

};

ImageUtils.crossOrigin = undefined;

ImageUtils.loadTexture = function ( url, mapping, onLoad, onError ) {

	console.warn( 'ImageUtils.loadTexture has been deprecated. Use TextureLoader() instead.' );

	const loader = new TextureLoader();
	loader.setCrossOrigin( this.crossOrigin );

	const texture = loader.load( url, onLoad, undefined, onError );

	if ( mapping ) texture.mapping = mapping;

	return texture;

};

ImageUtils.loadTextureCube = function ( urls, mapping, onLoad, onError ) {

	console.warn( 'ImageUtils.loadTextureCube has been deprecated. Use CubeTextureLoader() instead.' );

	const loader = new CubeTextureLoader();
	loader.setCrossOrigin( this.crossOrigin );

	const texture = loader.load( urls, onLoad, undefined, onError );

	if ( mapping ) texture.mapping = mapping;

	return texture;

};

ImageUtils.loadCompressedTexture = function () {

	console.error( 'ImageUtils.loadCompressedTexture has been removed. Use DDSLoader instead.' );

};

ImageUtils.loadCompressedTextureCube = function () {

	console.error( 'ImageUtils.loadCompressedTextureCube has been removed. Use DDSLoader instead.' );

};

//

export function CanvasRenderer() {

	console.error( 'CanvasRenderer has been removed' );

}

//

export function JSONLoader() {

	console.error( 'JSONLoader has been removed.' );

}

//

export const SceneUtils = {

	createMultiMaterialObject: function ( /* geometry, materials */ ) {

		console.error( 'SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js' );

	},

	detach: function ( /* child, parent, scene */ ) {

		console.error( 'SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js' );

	},

	attach: function ( /* child, scene, parent */ ) {

		console.error( 'SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js' );

	}

};

//

export function LensFlare() {

	console.error( 'LensFlare has been moved to /examples/jsm/objects/Lensflare.js' );

}

//

export class ParametricGeometry extends BufferGeometry {

	constructor() {

		console.error( 'ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js' );
		super();

	}

}

export class TextGeometry extends BufferGeometry {

	constructor() {

		console.error( 'TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js' );
		super();

	}

}

export function FontLoader() {

	console.error( 'FontLoader has been moved to /examples/jsm/loaders/FontLoader.js' );

}

export function Font() {

	console.error( 'Font has been moved to /examples/jsm/loaders/FontLoader.js' );

}

export function ImmediateRenderObject() {

	console.error( 'ImmediateRenderObject has been removed.' );

}

export class WebGLMultisampleRenderTarget extends WebGLRenderTarget {

	constructor( width, height, options ) {

		console.error( 'WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.' );
		super( width, height, options );
		this.samples = 4;

	}

}

export class DataTexture2DArray extends DataArrayTexture {

	constructor( data, width, height, depth ) {

		console.warn( 'DataTexture2DArray has been renamed to DataArrayTexture.' );
		super( data, width, height, depth );

	}

}

export class DataTexture3D extends Data3DTexture {

	constructor( data, width, height, depth ) {

		console.warn( 'DataTexture3D has been renamed to Data3DTexture.' );
		super( data, width, height, depth );

	}

}

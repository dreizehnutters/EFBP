/* jshint browser: true */
'use strict';

/**
 * Compute the max/min of an array
 * Notice that apply requires a context object, which is not really used
 * in the case of a static function such as Math.max
 */
Array.max = function (array) {
  return Math.max.apply( Math, array);
};
Array.min = function (array) {
  return Math.min.apply( Math, array);
};
/**
 * Clone an array
 */
Array.prototype.clone = function () {
  return this.slice(0);
};
/**
 * Merge an array with another one
 */
Array.prototype.merge = function (anotherArray) {
  return Array.prototype.push.apply( this, anotherArray);
};
/**
 * Test if an array is equal to another
 */
Array.prototype.isEqualTo = function (a2) {
  return (this.length === a2.length) && this.every( function( el, i) {
        return el === a2[i]; });
};



/**
 * @fileOverview  Defines error classes (also called "exception" classes)
 * @author Gerd Wagner
 */

function ConstraintViolation( msg, culprit) {
  this.message = msg;
  if (culprit) this.culprit = culprit;
}
function NoConstraintViolation( v) {
  if (v !== undefined) this.checkedValue = v;
  this.message = "";
}
NoConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
NoConstraintViolation.prototype.constructor = NoConstraintViolation;

/*
 * Property Constraint Violations
 */
function MandatoryValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
MandatoryValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
MandatoryValueConstraintViolation.prototype.constructor = MandatoryValueConstraintViolation;

function RangeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RangeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RangeConstraintViolation.prototype.constructor = RangeConstraintViolation;

function StringLengthConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
StringLengthConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
StringLengthConstraintViolation.prototype.constructor = StringLengthConstraintViolation;

function IntervalConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
IntervalConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
IntervalConstraintViolation.prototype.constructor = IntervalConstraintViolation;

function PatternConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
PatternConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
PatternConstraintViolation.prototype.constructor = PatternConstraintViolation;

function UniquenessConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
UniquenessConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
UniquenessConstraintViolation.prototype.constructor = UniquenessConstraintViolation;

function CardinalityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
CardinalityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
CardinalityConstraintViolation.prototype.constructor = CardinalityConstraintViolation;

function ReferentialIntegrityConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ReferentialIntegrityConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ReferentialIntegrityConstraintViolation.prototype.constructor = ReferentialIntegrityConstraintViolation;

function FrozenValueConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
FrozenValueConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
FrozenValueConstraintViolation.prototype.constructor = FrozenValueConstraintViolation;

function OtherConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
OtherConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
OtherConstraintViolation.prototype.constructor = OtherConstraintViolation;

/*
 * Entity Type Constraint Violations
 */
function EntityTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
EntityTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
EntityTypeConstraintViolation.prototype.constructor = EntityTypeConstraintViolation;

function ModelClassConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ModelClassConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ModelClassConstraintViolation.prototype.constructor = ModelClassConstraintViolation;

function ViewConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ViewConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ViewConstraintViolation.prototype.constructor = ViewConstraintViolation;

function ObjectTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
ObjectTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
ObjectTypeConstraintViolation.prototype.constructor = ObjectTypeConstraintViolation;

function AgentTypeConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
AgentTypeConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
AgentTypeConstraintViolation.prototype.constructor = AgentTypeConstraintViolation;

function KindConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
KindConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
KindConstraintViolation.prototype.constructor = KindConstraintViolation;

function RoleConstraintViolation( msg, culprit) {
  ConstraintViolation.call( this, msg, culprit);
}
RoleConstraintViolation.prototype = Object.create( ConstraintViolation.prototype);
RoleConstraintViolation.prototype.constructor = RoleConstraintViolation;

/*******************************************************************************
 * @fileOverview A collection of utilities: methods, objects, etc used all over the code.
 * @author Mircea Diaconescu
 * @copyright Copyright © 2014 Gerd Wagner, Mircea Diaconescu et al, 
 *            Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @date July 08, 2014, 11:04:23
 * @license The MIT License (MIT)
 ******************************************************************************/
var util = {};  //typeof util === undefined ? {} : util;

/**
 * Serialize a Date object as an ISO date string
 * @return  YYYY-MM-DD
 */
util.createIsoDateString = function (d) {
  return d.toISOString().substring(0,10);
};
/**
 * Return the next year value (e.g. if now is 2013 the function will return 2014)
 * @return {number}  the integer representing the next year value
 */
util.nextYear = function () {
  var date = new Date();
  return (date.getFullYear() + 1);
};
/**
 * Capitalize the first character of a string
 * @param {string} str
 * @return {string}
 */
util.capitalizeFirstChar = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Copy all own (property and method) slots of a number of untyped objects 
 * to a new untyped object.
 * @author Gerd Wagner
 * @return {object}  The merge result.
 */
util.mergeObjects = function () {
  var i = 0, k = 0, n = arguments.length, m = 0, 
      foundArrayArg = false,
      foundObjectArg = false, 
      arg = null, mergedResult,
      keys=[], key="";
  for (i = 0; i < n; i++) {
    arg = arguments[i];
    if (arg === undefined) {
      continue;
    }
    if (Array.isArray( arg)) {
      if (!foundObjectArg) {
        mergedResult = mergedResult ? mergedResult : [];
        foundArrayArg = true;
        mergedResult = mergedResult.concat( arg);
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Array with an Object! Expected Array arguments only!";
      }
    } else if (typeof arg === 'object') {
      if (!foundArrayArg) {
        mergedResult = mergedResult ? mergedResult : {};
        foundObjectArg = true;
        keys = Object.keys( arg);
        m = keys.length;
        for (k = 0; k < m; k++) {
          key = keys[k]; 
          mergedResult[key] = arg[key];
        }      
      } else {
        throw "util.mergeObjects: incompatible objects were found! Trying to merge "+
              "an Object with an Array! Expected Object arguments only!";
      }
    } else {
      throw "util.mergeObjects: only arguments of type Array or Object are allowed, but '" +
             typeof arguments[i] + "' type was found for argument number " + i;
    }
  }
  return mergedResult;
};
/**
 * Given a class name (e.g. Book) create the corresponding database
 * table name (e.g., books) which is the lower case plural version
 * of the used (and provided as parameter) class name.
 * @param {string} className
 * @return the corresponding table name for the given class name
 */
util.class2TableName = function ( className) {
  return util.camelToUnderscore( className, true);
};

/**
 * Given a property name (e.g. dateOfBirth) create the corresponding
 * table column name (e.g., date_of_birth) which is the underscore
 * notation version of the property name.
 * @param {string} propertyName
 * @return the corresponding column name for the given property name
 */
util.property2ColumnName = function ( propertyName) {
  return util.camelToUnderscore( propertyName);
};

/**
 * Given a table name (e.g. books) create the corresponding class
 * name (e.g., Book) which is the camel case version of the table
 * name but without the ending 's' and with first letter capitalized.
 * @param {string} tableName
 * @return the corresponding class name for the given table name
 */
util.table2ClassName = function ( tableName) {
  return util.underscoreToCamel( tableName, true);
};

/**
 * Given a column name (e.g. date_of_birth) create the corresponding
 * property name (e.g., dateOfBirth) which is the camel case version
 * of the column name (first letter lower case also).
 * @param {string} columnName
 * @return the corresponding property name for the given column name
 */
util.column2PropertyName = function ( columnName) {
  return util.underscoreToCamel( columnName);
};

/** REGEX to check if valid JS identifier **/
util.JsIdentifierPattern = /^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc][$A-Z\_a-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc0-9\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19b0-\u19c0\u19c8\u19c9\u19d0-\u19d9\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf2-\u1cf4\u1dc0-\u1de6\u1dfc-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f1\ua900-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]*$/;
/**
 * Convert a camel case identifier to underscore notation.
 * E.g.: dateOfBirth => date_of_birth,
 *       TemperatureSensor => temperature_sensors (if isClass = true)
 * @param {string} identifier
 *                the identifier(class name, property name, etc) to transform
 * @param {boolean} isClass
 *                a flag which specify if the identifier is a class name
 *                because in this case, the underscore notation contains
 *                the 's' char at the end.
 * @return the underscore-notation string for the identifier
 */
util.camelToUnderscore = function ( identifier, isClass) {
  var result = '';
  // null or undefined identifier
  if ( !identifier) {
    throw "util.camelToUnderscore: the 'identifier' can't be null or undefined!";
  }
  // invalid JS identifier
  if ( !util.JsIdentifierPattern.test( identifier)) {
    throw "util.camelToUnderscore: the provided 'identifier' (" + identifier + ") is not a JS valid identifier!";
  }
  // if the first is a A-Z char, replace it with its lower case equivalent
  // that's much easier than to create a regular expression to consider this
  // specific exception case (which occurs normally with class names)
  identifier = identifier.charAt( 0).toLowerCase() + identifier.slice( 1);
  // replace upper case letter with '_' followed by the lower case equivalent leter
  result = identifier.replace( /([A-Z])/g, function( $1) {
    return "_" + $1.toLowerCase();
  });
  // if is a class, add the 's' at the end
  if ( isClass === true) {
    result += 's';
  }
  return result;
};
/**
 * Given a underscore-notation identifier, the method
 * transform it to camel case notation.
 * E.g.: date_of_birth => dateOfBirth
 *       temperature_sensors => TemperatureSensor (if isClass = true)
 * @param {string} identifier
 *                the identifier to transform
 * @param {boolean} isClass
 *                a flag which specify if the identifier is a class name
 *                because in this case, the underscore notation contains
 *                the 's' char at the end which has to be cut-out and also
 *                the first letter has to be capitalized.
 * @return the camel case notation string for the identifier
 */
util.underscoreToCamel = function ( identifier, isClass) {
  var result = '';
  // null or undefined identifier
  if ( !identifier) {
    throw "util.underscoreToCamel: the 'identifier' can't be null or undefined!";
  }
  // invalid JS identifier
  if ( !util.JsIdentifierPattern.test( identifier)) {
    throw "util.underscoreToCamel: the provided 'identifier' is not a JS valid identifier!";
  }
  // replace upper case letter with '_' followed by the lower case equivalent letter
  result = identifier.replace( /(\_[a-z])/g, function ( $1) {
    return $1.toUpperCase().replace( '_', '');
  });
  // if is a class name, delete the 's' from the end
  // and capitalize the first letter
  if ( isClass === true) {
    result = result.charAt( 0).toUpperCase() + result.slice( 1);
    // if it has an 's' at the end, then cut it out
    // this should be in general the case...but anyway check it
    if ( result.charAt( result.length - 1) === 's') {
      result = result.slice( 0, result.length - 1);
    }
  }
  return result;
};

//***** NOT USED IN cLASSjs ************************
/**
 * Verifies if a value represents an integer or integer string
 * @param {string} x
 * @return {boolean}
 */
util.isIntegerString = function (x) {
  return typeof(x) === "string" && x.search(/^-?[0-9]+$/) == 0;
};
/**
 * Extract the data record part of an object. The extracted property values
 * are either primitive data values, Date objects, or arrays of primitive
 * data values.
 * @param {object} obj
 */
util.createRecordFromObject = function (obj) {
  var record={}, p="", val;
  for (p in obj) {
    val = obj[p];
    if (obj.hasOwnProperty(p) && (typeof(val) === "string" ||
            typeof(val) === "number" || typeof(val) === "boolean" ||
            val instanceof Date ||
            Array.isArray( val) &&  // array list of data values
            !val.some( function (el) {
              return typeof(el) === "object";
            })
        )) {
      if (val instanceof Date) record[p] = val.toISOString();
      else if (Array.isArray( val)) record[p] = val.slice(0);
      else record[p] = val;
    }
  }
  return record;
};
/**
 * Create a deep clone of a JS object
 * @param o  the object to be cloned
 * @return {object}
 */
util.cloneObject = function (o) {
  var clonedObj = Array.isArray(o) ? [] : {};
  Object.keys(o).forEach( function (key) {
    clonedObj[key] = (typeof o[key] === "object") ? util.cloneObject(o[key]) : o[key];
  });
  return clonedObj;
};
/**
 * Swap two elements of an array 
 * using the ES6 method Object.assign for creating a shallow clone of an object
 * @param a  the array
 * @param i  the first index
 * @param i  the 2nd index
 */
util.swapArrayElements = function (a,i,j) {
  var tempStore = (typeof a[i] === "object") ? Object.assign( {}, a[i]) : a[i];
  a[i] = (typeof a[j] === "object") ? Object.assign( {}, a[j]) : a[j];
  a[j] = tempStore;
};
/**
 * Shuffles array in place using the Fisher-Yates shuffle algorithm
 * @param {Array} a - An array of items to be shuffled
 */
util.shuffleArray = function (a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor( Math.random() * (i + 1) );
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
};
/**
 * Computes the Cartesian Product of an array of arrays
 * From https://stackoverflow.com/a/36234242/2795909
 * @param {Array} arr - An array of arrays of values to be combined
 */
util.cartesianProduct = function (arr) {
  return arr.reduce( function (a,b) {
    return a.map( function (x) {
      return b.map( function (y) {
        return x.concat(y);
      })
    }).reduce( function (a,b) {return a.concat(b)}, [])
  }, [[]])
};

/**
 * Predefined class for creating enumerations as special JS objects.
 * @copyright Copyright 2014 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 * @constructor
 * @this {eNUMERATION}
 * @param {string} name  The name of the new enumeration data type.
 * @param {array} enumArg  The labels array or code list map of the enumeration
 *
 * An eNUMERATION has the following properties:
 * labels         an array list of label strings such that enumLabel = labels[enumIndex-1]
 * enumLitNames
 *
 */
/* globals eNUMERATION */
function eNUMERATION( name, enumArg) {
  var i = 0, lbl = "", LBL = "";
  if (typeof name !== "string") {
    throw new Error(
      "The first constructor argument of an enumeration must be a string!");
  }
  this.name = name;
  if (Array.isArray(enumArg)) {
    // a simple enum defined by a list of labels
    if (!enumArg.every(function (n) {
        return (typeof n === "string");
      })) {
      throw new Error("A list of enumeration labels as the second " +
        "constructor argument must be an array of strings!");
    }
    this.labels = enumArg;
    this.enumLitNames = this.labels;
    this.codeList = null;
  } else if (typeof enumArg === "object" && Object.keys(enumArg).length > 0) {
    // a code list defined by a map
    if (!Object.keys(enumArg).every(function (code) {
        return (typeof enumArg[code] === "string");
      })) {
      throw new Error("All values of a code list map must be strings!");
    }
    this.codeList = enumArg;
    // use codes as the names of enumeration literals
    this.enumLitNames = Object.keys( this.codeList);
    this.labels = this.enumLitNames.map(function (c) {
      return enumArg[c] + " (" + c + ")";
    });
  } else {
    throw new Error(
      "Invalid Enumeration constructor argument: " + enumArg);
  }
  this.MAX = this.enumLitNames.length;
  // generate the enumeration literals by capitalizing/normalizing the names
  for (i = 1; i <= this.enumLitNames.length; i++) {
    // replace " " and "-" with "_"
    lbl = this.enumLitNames[i - 1].replace(/( |-)/g, "_");
    // convert to array of words, capitalize them, and re-convert
    LBL = lbl.split("_").map(function (lblPart) {
      return lblPart.toUpperCase();
    }).join("_");
    // assign enumeration index
    this[LBL] = i;
  }
  // protect the enumeration from change attempts
  Object.freeze( this);
  // add new enumeration to the population of all enumerations
  eNUMERATION.instances[this.name] = this;
}
/*
 * Check if a value represents an enumeration literal or a valid index
 */
eNUMERATION.prototype.isValidEnumLitOrIndex = function (v) {
  return (Number.isInteger(v) && v > 0 && v < this.MAX);
};
/*
 * Serialize a list of enumeration literals/indexes as a list of
 * enumeration literal names
 */
eNUMERATION.prototype.enumIndexesToNames = function (a) {
  if (!Array.isArray(a)) {
    throw new Error(
      "The argument must be an Array!");
  }
  var listStr = a.map(function (enumInt) {
    return this.enumLitNames[enumInt - 1];
  }, this).join(", ");
  return listStr;
};
/*
 * Define a map of all enumerations as a class-level property
 */
eNUMERATION.instances = {};

 /*******************************************************************************
 * cLASS allows defining constructor-based JavaScript classes and
 * class hierarchies based on a declarative description of the form:
 *
 *   var MyObject = new cLASS({
 *     Name: "MyObject",
 *     supertypeName: "MySuperClass",
 *     properties: {
 *       "myAdditionalAttribute": {range:"Integer", label:"...", max: 7, ...}
 *     },
 *     methods: {
 *     }
 *   });
 *   var myObj = new MyObject({id: 1, myAdditionalAttribute: 7});
 *   // test if instance of MyObject
 *   if (myObj. .Name ==="MyObject") ...
 *   // or, alternatively,
 *   if (myObj instanceof MyObject) ...
 *
 * Notice that it is assumed that a class has (or inherits) an "id" attribute
 * as its standard ID attribute.
 *
 *
 * @copyright Copyright 2015-2017 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
/* globals cLASS */
function cLASS (classSlots) {
  var propDs = classSlots.properties || {},  // property declarations
      methods = classSlots.methods || {},
      supertypeName = classSlots.supertypeName,
      superclass=null, constr=null,
      propsWithInitialValFunc = [];
  // check Class definition constraints
  if (supertypeName && !cLASS[supertypeName]) {
    throw "Specified supertype "+ supertypeName +" has not been defined!";
  }
  if (!Object.keys( propDs).every( function (p) {
        return (propDs[p].range !== undefined);
      }) ) {
    throw "No range defined for some property of class "+ classSlots.Name +" !";
  }
  // define a constructor function for creating a new cLASS
  constr = function (instanceSlots) {
    if (supertypeName) {
      // invoke supertype constructor
      cLASS[supertypeName].call( this, instanceSlots);
    }
    // assign own properties
    Object.keys( propDs).forEach( function (p) {
      var range = propDs[p].range,
          val, rangeClasses=[], i=0, objRef=null, validationResult=null;
      if (typeof instanceSlots === "object" && instanceSlots[p]) {
        // property p has an initialization slot
        val = instanceSlots[p];
        validationResult = cLASS.check( p, propDs[p], val);
        if (!(validationResult instanceof NoConstraintViolation)) throw validationResult;
        // is range a class (or class disjunction)?
        if (typeof range === "string" && typeof val !== "object" &&
            (cLASS[range] || range.includes("|"))) {
          if (range.includes("|")) {
            rangeClasses = range.split("|");
            for (i=0; i < rangeClasses.length; i++) {
              objRef = cLASS[rangeClasses[i]].instances[String(val)];
              // convert IdRef to object reference
              if (objRef) { this[p] = objRef; break;}
            }
          } else {  // range is a class
            // convert IdRef to object reference
            this[p] = cLASS[range].instances[String(val)] || val;
          }
        } else this[p] = val;
        delete instanceSlots[p];
      } else if (propDs[p].initialValue !== undefined) {
        // no initialization slot, assign initial value
        if (typeof propDs[p].initialValue === "function") {
          propsWithInitialValFunc.push(p);
        } else this[p] = propDs[p].initialValue;
      } else if (!propDs[p].optional) {
        // assign default value to mandatory properties without an initialization slot
        if (cLASS.isIntegerType(range) || cLASS.isDecimalType(range)) {
          this[p] = 0;
        } else if (range === "String") {
          this[p] = "";
        } else if (range === "Boolean") {
          this[p] = false;
        } else if (typeof range === "string" && cLASS[range] ||
            typeof range === "object" && ["Array", "ArrayList"].includes(range["dataType"])) {
          this[p] = [];
        } else if (typeof range === "object" && range["dataType"] === "Map") {
          this[p] = {};
        }
      }
      // initialize historical properties
      if (propDs[p].historySize) {
        this.history = this.history || {};  // a map
        this.history[p] = propDs[p].decimalPlaces ?
            new cLASS.RingBuffer( propDs[p].range, propDs[p].historySize,
                {decimalPlaces: propDs[p].decimalPlaces}) :
            new cLASS.RingBuffer( propDs[p].range, propDs[p].historySize);
      }
    }, this);
    // call the functions for initial value expressions
    propsWithInitialValFunc.forEach( function (p) {
      this[p] = propDs[p].initialValue.call(this);
    }, this);
    // assign remaining fields not defined as properties by the object's class
    if (typeof( instanceSlots) === "object") {
      Object.keys( instanceSlots).forEach( function (f) {
        this[f] = instanceSlots[f];
      }, this);
    }
    // is the class not abstract and does the object have an ID slot?
    if (!classSlots.isAbstract && "id" in this) {
      // add new object to the population/extension of the class
      cLASS[classSlots.Name].instances[String(this.id)] = this;
    }
  };
  // assign class-level (meta-)properties
  constr.constructor = cLASS;
  constr.Name = classSlots.Name;
  if (classSlots.isAbstract) constr.isAbstract = true;
  if (classSlots.shortLabel) constr.shortLabel = classSlots.shortLabel;
  if (supertypeName) {
    constr.supertypeName = supertypeName;
    superclass = cLASS[supertypeName];
    // apply classical inheritance pattern
    constr.prototype = Object.create( superclass.prototype);
    constr.prototype.constructor = constr;
    // merge superclass property declarations with own property declarations
    constr.properties = Object.create( superclass.properties);
   //  assign own property declarations, possibly overriding super-props																		 
    Object.keys( propDs).forEach( function (p) {
      constr.properties[p] = propDs[p];
    });
  } else {  // if class is root class
    constr.properties = propDs;
    /***************************************************/
    constr.prototype.set = function ( prop, val) {
    /***************************************************/
      // this = object
      var constrViol = cLASS.check( prop, this.constructor.properties[prop], val);
      if (constrViol instanceof NoConstraintViolation) {
        this[prop] = constrViol.checkedValue;
      } else {
        throw constrViol;
      }
    };
    /***************************************************/
    // overwrite and improve the standard toString method
    constr.prototype.toString = function () {
    /***************************************************/
      var str1="", str2="", i=0;
      if (this.name) str1 = this.name;
      else {
        str1 = this.constructor.shortLabel || this.constructor.Name;
        if (this.id) str1 += ":"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            propLabel = propDecl ? (propDecl.shortLabel || propDecl.label) : key,
            valStr = "";
        // is the slot of a declared reference property?
        if (propDecl && typeof propDecl.range === "string" && cLASS[propDecl.range]) {
          // is the property multi-valued?
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (Array.isArray( this[key])) {
              valStr = this[key].map( function (o) {return o.id;}).toString();
            } else valStr = JSON.stringify( Object.keys( this[key]));
          } else {  // if the property is single-valued
            valStr = String( this[key].id);
          }
        } else if (typeof this[key] === "function") {
          // the slot is an instance-level method slot
          valStr = "a function";
        } else {  // the slot is an attribute slot or an undeclared reference property slot
          valStr = JSON.stringify( this[key]);
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    };
    /***************************************************/
    constr.prototype.toRecord = function () {
    /***************************************************/
      var obj = this, rec={}, propDecl={}, valuesToConvert=[], range, val;
      Object.keys( obj).forEach( function (p) {
        if (obj[p] !== undefined) {
          val = obj[p];
          propDecl = obj.constructor.properties[p];
          range = propDecl.range;
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (range.constructor && range.constructor === cLASS) { // object reference(s)
              if (Array.isArray( val)) {
                valuesToConvert = val.slice(0);  // clone;
              } else {  // map from ID refs to obj refs
                valuesToConvert = Object.values( val);
              }
            } else if (Array.isArray( val)) {
              valuesToConvert = val.slice(0);  // clone;
            } else console.log("Invalid non-array collection in toRecord!");
          } else {  // maxCard=1
            valuesToConvert = [val];
          }
          valuesToConvert.forEach( function (v,i) {
            // alternatively: enum literals as labels
            // if (range instanceof eNUMERATION) rec[p] = range.labels[val-1];
            if (["number","string","boolean"].includes( typeof(v)) || !v) {
              valuesToConvert[i] = String( v);
            } else if (range === "Date") {
              valuesToConvert[i] = util.createIsoDateString( v);
            } else if (range.constructor && range.constructor === cLASS) { // object reference(s)
              valuesToConvert[i] = v.id;
            } else if (Array.isArray( v)) {  // JSON-compatible array
              valuesToConvert[i] = v.slice(0);  // clone
            } else valuesToConvert[i] = JSON.stringify( v);
          });
          if (!propDecl.maxCard || propDecl.maxCard <= 1) {
            rec[p] = valuesToConvert[0];
          } else {
            rec[p] = valuesToConvert;
          }
        }
      });
      return rec;
    };
    /***************************************************/
    // Convert property value to (form field) string.
    constr.prototype.getValueAsString = function ( prop) {
    /***************************************************/
      // make sure the eNUMERATION meta-class object can be checked if available
      var eNUMERATION = typeof eNUMERATION === "undefined" ? undefined : eNUMERATION;
      var propDecl = this.constructor.properties[prop],
          range = propDecl.range, val = this[prop];
      var valuesToConvert=[], displayStr="", k=0,
          listSep = ", ";
      if (val === undefined || val === null) return "";
      if (propDecl.maxCard && propDecl.maxCard > 1) {
        if (Array.isArray( val)) {
          valuesToConvert = val.slice(0);  // clone;
        } else console.log("The value of a multi-valued " +
            "datatype property must be an array!");
      } else valuesToConvert = [val];
      valuesToConvert.forEach( function (v,i) {
        if (eNUMERATION && range instanceof eNUMERATION) {
          valuesToConvert[i] = range.labels[v-1];
        } else if (["number","string","boolean"].includes( typeof v) || !v) {
          valuesToConvert[i] = String( v);
        } else if (range === "Date") {
          valuesToConvert[i] = util.createIsoDateString( v);
        } else if (Array.isArray( v)) {  // JSON-compatible array
          valuesToConvert[i] = v.slice(0);  // clone
        } else if (typeof range === "string" && cLASS[range]) {
          if (typeof val === "object" && val.id !== undefined) {
            valuesToConvert[i] = val.id;
          } else {
            valuesToConvert[i] = "";
          }
        } else valuesToConvert[i] = JSON.stringify( v);
      });
      displayStr = valuesToConvert[0];
      if (propDecl.maxCard && propDecl.maxCard > 1) {
        displayStr = "[" + displayStr;
        for (k=1; k < valuesToConvert.length; k++) {
          displayStr += listSep + valuesToConvert[k];
        }
        displayStr = displayStr + "]";
      }
      return displayStr;
    };
    /***************************************************/
/*
    // A concise serialization method for logging
    constr.prototype.toLogString = function () {
    //***************************************************
      var str1="", str2="", i=0;
      var decimalPlaces = 2,
          roundFactor = Math.pow( 10, decimalPlaces);
      if (this.name) str1 = this.name;
      else {
        str1 = this.constructor.shortLabel || this.constructor.Name;
        if (this.id) str1 += ":"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            val = this[key], propLabel="", valStr="";
        if (!propDecl || !propDecl.shortLabel) return;
        propLabel = propDecl.shortLabel;
        // if the property is a reference property?
        if (cLASS[propDecl.range]) {
          // if the reference property is multi-valued?
          if (propDecl.maxCard && propDecl.maxCard > 1) {
            if (Array.isArray( val)) {
              valStr = val.map( function (o) {return o.id;}).toString();
            } else valStr = JSON.stringify( Object.keys( val));
          } else {  // if the reference property is single-valued
            valStr = val.id;
          }
        } else {  // if the property is not a reference property
          if (typeof val === "number" && !Number.isInteger(val)) {
            valStr = JSON.stringify( Math.round( val * roundFactor) / roundFactor);
          } else valStr = JSON.stringify( val);
        }
        if (val !== undefined) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    };
*/
    /***************************************************/
    // A class-level de-serialization method
    constr.createObjectFromRecord = function (record) {
    /***************************************************/
      var obj={};
      try {
        obj = new constr( record);
      } catch (e) {
        console.log( e.constructor.name + " while deserializing a "+
            constr.Name +" record: " + e.message);
        obj = null;
      }
      return obj;
    };
  }
  // assign instance-level methods
  Object.keys( methods).forEach( function (m) {
    constr.prototype[m] = methods[m];
  });
  // store class/constructor as value associated with its name in a map
  cLASS[classSlots.Name] = constr;
  // initialize the class-level instances property
   if (!classSlots.isAbstract) {
     cLASS[classSlots.Name].instances = {};
   }
  // return the constructor as the object constructed with new cLASS
  return constr;
}
 /**
  * Determine if a type is an integer type.
  * @method
  * @author Gerd Wagner
  * @param {string|eNUMERATION} T  The type to be checked.
  * @return {boolean}
  */
cLASS.isIntegerType = function (T) {
  return typeof(T)==="string" && T.includes('Integer') ||
      T instanceof eNUMERATION;
};
 /**
  * Determine if a type is a decimal type.
  * @method
  * @author Gerd Wagner
  * @param {string} T  The type to be checked.
  * @return {boolean}
  */
 cLASS.isDecimalType = function (T) {
   return typeof(T)==="string" &&
       (T.includes("Decimal") || T.includes("UnitInterval"));
 };
 /**
  * Constants
  */
 cLASS.patterns = {
   // defined in WHATWG HTML5 specification
   EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
   // proposed by Diego Perini (https://gist.github.com/729294)
   URL: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
   INT_PHONE_NO: /^\+(?:[0-9] ?){6,14}[0-9]$/
 };
 /**
  * Generic method for checking the integrity constraints defined in property declarations.
  * The values to be checked are first parsed/deserialized if provided as strings.
  * Copied from the cOMPLEXtYPE class of oNTOjs
  *
  * min/max: numeric (or string length) minimum/maximum
  * optional: true if property is single-valued and optional (false by default)
  * range: String|NonEmptyString|Integer|...
  * pattern: a regular expression to be matched
  * minCard/maxCard: minimum/maximum cardinality of a multi-valued property
  *     By default, maxCard is 1, implying that the property is single-valued, in which
  *     case minCard is meaningless/ignored. maxCard may be Infinity.
  *
  * @method
  * @author Gerd Wagner
  * @param {string} fld  The property for which a value is to be checked.
  * @param {object} decl  The property's declaration.
  * @param {string|number|boolean|object} val  The value to be checked.
  * @return {ConstraintViolation}  The constraint violation object.
  */
 cLASS.check = function (fld, decl, val, optParams) {
   var constrVio=null, valuesToCheck=[],
       msg = decl.patternMessage || "",
       minCard = decl.minCard || 0,  // by default, a multi-valued property is optional
       maxCard = decl.maxCard || 1,  // by default, a property is single-valued
       min = decl.min || 0, max = decl.max,
       range = decl.range,
       pattern = decl.pattern;
   // check Mandatory Value Constraint
   if (val === undefined || val === "") {
     if (decl.optional) return new NoConstraintViolation();
     else {
       return new MandatoryValueConstraintViolation(
           "A value for "+ fld +" is required!");
     }
   }
   if (maxCard === 1) {  // single-valued property
     valuesToCheck = [val];
   } else {  // multi-valued properties can be array-valued or map-valued
     if (Array.isArray( val) ) {
       valuesToCheck = val;
     } else if (typeof range === "string" && cLASS[range]) {
       valuesToCheck = Object.keys( val).map( function (id) {
         return val[id];
       });
     } else {
       return new RangeConstraintViolation("Values for "+ fld +
           " must be arrays or maps!");
     }
   }
   // convert integer strings to integers
   if (cLASS.isIntegerType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseInt( v);
     });
   }
   // convert decimal strings to decimal numbers
   if (cLASS.isDecimalType( range)) {
     valuesToCheck.forEach( function (v,i) {
       if (typeof v === "string") valuesToCheck[i] = parseFloat( v);
     });
   }
   /*********************************************************************
    ***  Convert value strings to values and check range constraints ****
    ********************************************************************/
   switch (range) {
     case "String":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be strings!");
         }
       });
       break;
     case "NonEmptyString":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || v.trim() === "") {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be non-empty strings!");
         }
       });
       break;
     case "Email":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.EMAIL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid email addresses!");
         }
       });
       break;
     case "URL":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.URL.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid URLs!");
         }
       });
       break;
     case "PhoneNumber":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "string" || !cLASS.patterns.INT_PHONE_NO.test( v)) {
           constrVio = new RangeConstraintViolation("Values for "+ fld +
               " must be valid international phone numbers!");
         }
       });
       break;
     case "Integer":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be an integer!");
         }
       });
       break;
     case "NonNegativeInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 0) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a non-negative integer!");
         }
       });
       break;
     case "PositiveInteger":
       valuesToCheck.forEach( function (v) {
         if (!Number.isInteger(v) || v < 1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a positive integer!");
         }
       });
       break;
     case "Number":
     case "Decimal":
     case "Percent":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         }
       });
       break;
     case "ClosedUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<0 || v>1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in [0,1]!");
         }
       });
       break;
     case "OpenUnitInterval":
       valuesToCheck.forEach( function (v) {
         if (typeof v !== "number") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a (decimal) number!");
         } else if (v<=0 || v>=1) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be a number in (0,1)!");
         }
       });
       break;
     case "Boolean":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string") {
           if (["true","yes"].includes(v)) valuesToCheck[i] = true;
           else if (["no","false"].includes(v)) valuesToCheck[i] = false;
           else constrVio = new RangeConstraintViolation("The value of "+ fld +
                 " must be either 'true'/'yes' or 'false'/'no'!");
         } else if (typeof v !== "boolean") {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either 'true' or 'false'!");
         }
       });
       break;
     case "Date":
       valuesToCheck.forEach( function (v,i) {
         if (typeof v === "string" &&
             (/\d{4}-(0\d|1[0-2])-([0-2]\d|3[0-1])/.test(v) ||
             !isNaN( Date.parse(v)))) {
           valuesToCheck[i] = new Date(v);
         } else if (!(v instanceof Date)) {
           constrVio = new RangeConstraintViolation("The value of "+ fld +
               " must be either a Date value or an ISO date string. "+
               v +" is not admissible!");
         }
       });
       break;
     default:
       if (range instanceof eNUMERATION) {
         valuesToCheck.forEach( function (v) {
           if (!Number.isInteger( v) || v < 1 || v > range.MAX) {
             constrVio = new RangeConstraintViolation("The value "+ v +
                 " is not an admissible enumeration integer for "+ fld);
           }
         });
       } else if (Array.isArray( range)) {
         // *** Ad-hoc enumeration ***
         valuesToCheck.forEach( function (v) {
           if (range.indexOf(v) === -1) {
             constrVio = new RangeConstraintViolation("The "+ fld +" value "+ v +
                 " is not in value list "+ range.toString());
           }
         });
       } else if (!(typeof range === "string" && (cLASS[range] || range.includes("|")))) {
         if (typeof range === "object" && range.dataType !== undefined) {
           // the range is a (collection) datatype declaration record
           valuesToCheck.forEach(function (v) {
             var i = 0;
             if (typeof v !== "object") {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be an object! " + JSON.stringify(v) + " is not admissible!");
             }
             switch (range.dataType) {
               case "Array":
                 if (!Array.isArray(v)) {
                   constrVio = new RangeConstraintViolation("The value of " + fld +
                       " must be an array! " + JSON.stringify(v) + " is not admissible!");
                   break;
                 }
                 if (v.length !== range.size) {
                   constrVio = new RangeConstraintViolation("The value of " + fld +
                       " must be an array of length " + range.size + "! " + JSON.stringify(v) + " is not admissible!");
                   break;
                 }
                 for (i = 0; i < range.size; i++) {
                   if (!cLASS.isOfType(v[i], range.itemType)) {
                     constrVio = new RangeConstraintViolation("The items of " + fld +
                         " must be of type " + range.itemType + "! " + JSON.stringify(v) +
                         " is not admissible!");
                   }
                 }
                 break;
             }
           });
         } else if (range === Object) {
           valuesToCheck.forEach(function (v) {
             if (!(v instanceof Object)) {
               constrVio = new RangeConstraintViolation("The value of " + fld +
                   " must be a JS object! " + JSON.stringify(v) + " is not admissible!");
             }
           });
         }
       } else if (optParams && optParams.checkRefInt) {
         // the range is a cLASS or a cLASS disjunction
         valuesToCheck.forEach(function (v, i) {
           var rangeClasses = [];
           if (cLASS[range]) {
             if (v instanceof cLASS[range]) v = valuesToCheck[i] = v.id;  // convert to IdRef
             else if (typeof v === "string") v = valuesToCheck[i] = parseInt(v);
             // assuming that the ID reference represents an integer (ID)
             if (!Number.isInteger(v)) {
               constrVio = new RangeConstraintViolation("The value (" + val + ") of property '" +
                   fld + "' is not an integer!");
             }
             if (!cLASS[range].instances[String(v)]) {
               constrVio = new ReferentialIntegrityConstraintViolation("The value " + v + " of property '" +
                   fld + "' is not an ID of any " + range + " object!");
             }
           } else {  // a cLASS disjunction
             rangeClasses = range.split("|");
             // check referential integrity: val must be in some range class
             if (!rangeClasses.some(function (rc) {
                   return cLASS[rc].instances[String(v)];
                 })) {
               constrVio = ReferentialIntegrityConstraintViolation("The value " + val + " does not reference any of " +
                   range + "!");
             }
           }
         });
       }
   }
   // return constraint violation found in range switch
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check constraints that apply to several ranges  ***
    ********************************************************/
   if (range === "String" || range === "NonEmptyString") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v.length < min) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be smaller than "+ min);
       } else if (max !== undefined && v.length > max) {
         constrVio = new StringLengthConstraintViolation("The length of "+
             fld + " must not be greater than "+ max);
       } else if (pattern !== undefined && !pattern.test( v)) {
         constrVio = new PatternConstraintViolation( msg || v +
             "does not comply with the pattern defined for "+ fld);
       }
     });
   }
   if (range === "Integer" || range === "NonNegativeInteger" ||
       range === "PositiveInteger") {
     valuesToCheck.forEach( function (v) {
       if (min !== undefined && v < min) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be greater than "+ min);
       } else if (max !== undefined && v > max) {
         constrVio = new IntervalConstraintViolation( fld +
             " must be smaller than "+ max);
       }
     });
   }
   if (constrVio) return constrVio;

   /********************************************************
    ***  Check cardinality constraints  *********************
    ********************************************************/
   if (maxCard > 1) { // (a multi-valued property can be array-valued or map-valued)
     // check minimum cardinality constraint
     if (minCard > 0 && valuesToCheck.length < minCard) {
       return new CardinalityConstraintViolation("A collection of at least "+
           minCard +" values is required for "+ fld);
     }
     // check maximum cardinality constraint
     if (valuesToCheck.length > maxCard) {
       return new CardinalityConstraintViolation("A collection value for "+
           fld +" must not have more than "+ maxCard +" members!");
     }
   }
   val = maxCard === 1 ? valuesToCheck[0] : valuesToCheck;
   return new NoConstraintViolation( val);
 };
 /**
  * Check if a value is of some type.
  * @method
  * @author Gerd Wagner
  * @return {boolean}
  */
 cLASS.rangeToJsDataType = function ( range) {
   var jsDataType="";
   switch (range) {
     case "String":
     case "NonEmptyString":
     case "Email":
     case "URL":
     case "PhoneNumber":
     case "Date":
       jsDataType = "string";
       break;
     case "Integer":
     case "NonNegativeInteger":
     case "PositiveInteger":
     case "Number":
     case "Decimal":
     case "Percent":
     case "ClosedUnitInterval":
     case "OpenUnitInterval":
       jsDataType = "number";
       break;
     case "Boolean":
       jsDataType = "boolean";
       break;
     default:
       if (range instanceof eNUMERATION) {
         jsDataType = "number";
       } else if (typeof range === "string" && cLASS[range]) {
         jsDataType = "string";  // for the standard ID (TODO: can also be "number")
       } else if (typeof range === "object") {  // a.g. Array or Object
         jsDataType = "object";
       }
   }
   return jsDataType;
 };
 /**
  * Check if a value is of some type.
  * @method
  * @author Gerd Wagner
  * @return {boolean}
  */
 cLASS.isOfType = function ( v, Type) {
   switch (Type) {
     case "String": return (typeof v === "string");
     case "NonEmptyString": return (typeof v === "string" && v.trim() !== "");
     case "Integer": return Number.isInteger(v);
     case "NonNegativeInteger": return (Number.isInteger(v) && v >= 0);
     case "PositiveInteger": return (Number.isInteger(v) && v > 0);
     case "Decimal": return (typeof v === "number");
     case "ClosedUnitInterval":
       return (typeof v === "number" && v>=0 && v<=1);
     case "OpenUnitInterval":
       return (typeof v === "number" && v>0 && v<1);
     default: return true;
   }
 };

 /********************************************************
  ***  Collection datatypes  *****************************
  ********************************************************/
/*
 * cLASS datatypes, such as collection types, are defined in the form of
 * cOLLECTIONdATATYPE objects that specify the collection type, the
 * item type and the size of the collection.
 */
 cLASS.cOLLECTIONdATATYPE = function (typeName, itemType, size, optParams) {
   this.type = typeName;
   this.itemType = itemType;
   this.size = size;
   this.optParams = optParams;
 };
 cLASS.Array = function (itemType, size, optParams) {
  if (this instanceof cLASS.Array) {
    // called with new, so return an array object
    this.type = "Array";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.array = new Array( size);
  } else {
    // called without new, return an object representing an Array datatype
    return new cLASS.cOLLECTIONdATATYPE("Array",
        {itemType:itemType, size:size, optParams:optParams});
  }
 };
cLASS.ArrayList = function (itemType, constraints) {
   if (constraints) {
     return {dataType:"ArrayList", itemType: itemType, constraints: constraints};
   } else return {dataType:"ArrayList", itemType: itemType};
 };
cLASS.Map = function (itemType, constraints) {
  if (constraints) {
    return {dataType:"Map", itemType: itemType, constraints: constraints};
  } else return {dataType:"Map", itemType: itemType};
};

cLASS.RingBuffer = function (itemType, size, optParams) {
  if (this instanceof cLASS.RingBuffer) {
    // called with new, so return a ring buffer object
    this.type = "RingBuffer";
    this.itemType = itemType;
    this.size = size;
    if (optParams) {
      if (optParams.constraints) this.constraints = optParams.constraints; //TODO
      if (optParams.decimalPlaces) this.decimalPlaces = optParams.decimalPlaces;
    }
    this.first = 0;  // index of first item
    this.last = -1;  // index of last item
    this.buffer = new Array( size);
  } else {
    // called without new, return an object representing a RingBuffer datatype
    return new cLASS.cOLLECTIONdATATYPE("RingBuffer",
        {itemType:itemType, size:size, optParams:optParams});
  }
};
cLASS.RingBuffer.prototype.nmrOfItems = function () {
  if (this.last === -1) return 0;
  else if (this.first <= this.last) return this.last - this.first + 1;
  else return this.last + this.size - this.first + 1;
};
cLASS.RingBuffer.prototype.add = function (item) {
  if (this.nmrOfItems() < this.size) {
   this.last++;  // still filling the buffer
  } else {  // buffer is full, move both pointers
   this.first = (this.first+1) % this.size;
   this.last = (this.last+1) % this.size;
  }
  this.buffer[this.last] = item;
};
cLASS.RingBuffer.prototype.toString = function (n) {
  var i=0, str = "[", item, roundingFactor=1,
      N = this.nmrOfItems(),
      outputLen = n ? Math.min( n, N) : N;
  if (N === 0) return " ";
  for (i=0; i < outputLen; i++) {
    item = this.buffer[(this.first+i) % this.size];
    // serialize enum values as labels
    if (this.itemType instanceof eNUMERATION) item = this.itemType.labels[item-1];
    else if (cLASS.isDecimalType( this.itemType)) {
      //decimalPlaces:
      roundingFactor = Math.pow( 10, this.decimalPlaces);
      item = Math.round( item * roundingFactor) / roundingFactor;
    }
    str += item;
    if (i < outputLen-1) str += ", ";
  }
  return str + "]";
 };
// Simple Moving Average (SMA)
 cLASS.RingBuffer.prototype.getSMA = function (n) {
   var N = this.nmrOfItems(), i=0, val=0, sum=0;
   if (n) N = Math.min( n, N);
   for (i=0; i < N; i++) {
     val = this.buffer[(this.first+i) % this.size];
     sum += val;
   }
   return sum / N;
 };

 /**
 * @fileOverview  A library of XHR-based HTTP messaging methods.
 *                It uses JS Promises in the underlayer.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
var xhr = {
  URL_PATTERN: /\b(https?):\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|??]/,
  /**
   * Default response handler, used if 
   * a custom one is not provided by the caller 
   * of GET, PUT, POST, DELETE or OPTIONS.
   */
  defaultResponseHandler: function(rsp) {
    if (rsp.status === 200 || rsp.status === 201 || rsp.status === 304) 
      console.log("Response: " + rsp.responseText); 
     else console.log("Error " + rsp.status +": "+ rsp.statusText);
   },
  /**
   * Utility method encapsulating common code 
   * required to initiate the specific XHR request.
   */
  initiateRequest: function (params, type) {
    params.method = type;
    if (typeof params.handleResponse !== "function")
      params.handleResponse = xhr.defaultResponseHandler;
    xhr.makeRequest( params)
    .then(function (p) {params.handleResponse(p)})
    .catch(function (e) {console.log(e)});
  },
  /**
   * Make an XHR GET request
   * @param params  Contains parameter slots
   */
  OPTIONS: function (params) {
    xhr.initiateRequest(params, "OPTIONS");
  },
  /**
   * Make an XHR GET request
   * @param params  Contains parameter slots
   */
  GET: function (params) {
    xhr.initiateRequest(params, "GET");
  },
  /**
   * Make an XHR POST request
   * @param params  Contains parameter slots
   */
  POST: function (params) {
    xhr.initiateRequest(params, "POST");
  },
  /**
   * Make an XHR PUT request
   * @param params  Contains parameter slots
   */
  PUT: function (params) {
    xhr.initiateRequest(params, "PUT");
  },
  /**
   * Make an XHR DELETE request
   * @param params  Contains parameter slots
   */
  DELETE: function (params) {
    xhr.initiateRequest(params, "DELETE");
  },
  /**
   * Make an XHR request
   * @param {{method: string?, url: string, 
   *          reqFormat: string?, respFormat: string?,
   *          handleResponse: function?,
   *          requestHeaders: Map?}
   *        } params  The parameter slots.
   */
  makeRequest: function (params) {
    return new Promise(function(resolve, reject) {
      var req=null, url="", method="",
          reqFormat="", respFormat="";
      if (!params.url) {
        reject(new Error("Missing value for url parameter in XHR GET request!"));
      } else if (!xhr.URL_PATTERN.test( params.url)) {
        reject(new Error("Invalid URL in XHR GET request!"));    
      } else {
        url = params.url;
        req = new XMLHttpRequest();
        method = (params.method) ? params.method : "GET";  // default
        reqFormat = (params.reqFormat) ? params.reqFormat : 
            "application/x-www-form-urlencoded";  // default
        respFormat = (params.respFormat) ? params.respFormat : "application/json";  // default
      }
      req.open( method, url, true);
      req.onload = function (e) {resolve(e.target);};
      req.onerror = reject;
      if (params.requestHeaders) {
        Object.keys( params.requestHeaders).forEach( function (rH) {
          req.setRequestHeader( rH, params.requestHeaders[rH]);
        });
      }
      req.setRequestHeader("Accept", respFormat);
      if (method === "GET" || method === "DELETE") {
        req.send("");
      } else {  // POST and PUT
        req.setRequestHeader("Content-Type", reqFormat);
        req.send( params.msgBody);
      }
    });
  }
};
/**
 * @fileOverview  This file contains the definition of the library class
 * sTORAGEmANAGER.
 * @author Gerd Wagner
 * @copyright Copyright 2015 Gerd Wagner, Chair of Internet Technology,
 *   Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 */
/**
 * Library class providing storage management methods for a number of predefined
 * storage adapters
 *
 * @constructor
 * @this {sTORAGEmANAGER}
 * @param storageAdapter: object
 */
function sTORAGEmANAGER( storageAdapter) {
  if (typeof storageAdapter !== 'object' ||
      typeof storageAdapter.name !== "string" ||
      !(["LocalStorage","IndexedDB","MariaDB"].includes( storageAdapter.name))) {
    throw new ConstraintViolation("Invalid storage adapter name!");
  } else if (!storageAdapter.dbName) {
    throw new ConstraintViolation("Storage adapter:missing DB name!");
  } else {
    this.adapter = storageAdapter;
    // if "LocalStorage", create a main memory DB
    if (storageAdapter.name === "LocalStorage") {
      Object.keys( cLASS).forEach( function (key) {
        // load all cLASSes
        if (cLASS[key].instances) {
          sTORAGEmANAGER.adapters["LocalStorage"].retrieveLsTable( cLASS[key]);
        }
      });
    }
  }
  // copy storage adapter to the corresponding adapter's storage management method library
  sTORAGEmANAGER.adapters[this.adapter.name].currentAdapter = storageAdapter;
}
/**
 * Generic method for creating an empty DB
 * @method
 */
sTORAGEmANAGER.prototype.createEmptyDb = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    var modelClasses=[];
    Object.keys( cLASS).forEach( function (key) {
      // collect all non-abstract cLASSes
      if (cLASS[key].instances) modelClasses.push( cLASS[key]);
    });
    sTORAGEmANAGER.adapters[adapterName].createEmptyDb( dbName, modelClasses)
    .then( resolve);
  });
};
/**
 * Generic method for creating and "persisting" new model objects
 * @method
 * @param {object} mClass  The model cLASS concerned
 * @param {object} records  The object creation slots
 */
sTORAGEmANAGER.prototype.add = function (mClass, records) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    var newObj=null, objID="";
    if (Array.isArray( records)) {  // bulk insertion
      sTORAGEmANAGER.adapters[adapterName].add( dbName, mClass, records)
      .then( function () {
        console.log( records.length +" "+ mClass.Name +"s added.");
        if (typeof resolve === "function") resolve();

      });
    } else {  // single record insertion
      try {
        newObj = new mClass( records);  // check constraints
        objID = newObj.id;  // save object ID
        if (newObj) {
          sTORAGEmANAGER.adapters[adapterName].add( dbName, mClass, newObj)
          .then( function () {
            console.log( mClass.Name +" "+ objID +" added.");
            if (typeof resolve === "function") resolve();
          });
        }
      } catch (e) {
        if (e instanceof ConstraintViolation) {
          console.log( e.constructor.name +": "+ e.message);
        } else console.log( e);
      }
    }
  });
};
/**
 * Generic method for loading/retrieving a model object
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 */
sTORAGEmANAGER.prototype.retrieve = function (mc, id) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].retrieve( dbName, mc, id)
    .then( function (obj) {
      if (!obj) {
        obj = null;
        console.log("There is no " + mc.Name + " with ID value " + id + " in the database!");
      }
      resolve( obj);
    });
  });
};
/**
 * Generic method for loading all table rows and converting them
 * to model objects
 *
 * @method
 * @param {object} mc  The model cLASS concerned
 */
sTORAGEmANAGER.prototype.retrieveAll = function (mc) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].retrieveAll( dbName, mc)
    .then( resolve);
  });
};
/**
 * Generic method for updating model objects
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 * @param {object} slots  The object's update slots
 */
sTORAGEmANAGER.prototype.update = function (mc, id, slots) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName, 
      currentSM = this;
  return new Promise( function (resolve) {
    var objectBeforeUpdate = null, properties = mc.properties,
        updatedProperties=[], noConstraintViolated = true,
        updSlots = util.cloneObject( slots);
    // first check if object exists
    currentSM.retrieve( mc, id).then( function (objToUpdate) {
      if (objToUpdate) {
        if (typeof objToUpdate === "object" && objToUpdate.constructor !== mc) {
          // if the retrieved objToUpdate is not of type mc, check integrity constraints
          objToUpdate = mc.createObjectFromRecord( objToUpdate);
          if (!objToUpdate) return;  // constraint violation
        }
        objectBeforeUpdate = util.cloneObject( objToUpdate);
        try {
          Object.keys( slots).forEach( function (prop) {
            var oldVal = objToUpdate[prop],
                newVal = slots[prop],
                propDecl = properties[prop];
            if (prop !== "id") {
              if (propDecl.maxCard === undefined || propDecl.maxCard === 1) {  // single-valued
                if (Number.isInteger( oldVal) && newVal !== "") {
                  newVal = parseInt( newVal);
                } else if (typeof oldVal === "number" && newVal !== "") {
                  newVal = parseFloat( newVal);
                } else if (oldVal===undefined && newVal==="") {
                  newVal = undefined;
                }
                if (newVal !== oldVal) {
                  updatedProperties.push( prop);
                  objToUpdate.set( prop, newVal);  // also checking constraints
                } else {
                  delete updSlots[prop];
                }
              } else {   // multi-valued
                if (oldVal.length !== newVal.length ||
                    oldVal.some( function (vi,i) { return (vi !== newVal[i]);})) {
                  objToUpdate.set(prop, newVal);
                  updatedProperties.push(prop);
                } else {
                  delete updSlots[prop];
                }
              }
            }
          });
        } catch (e) {
          console.log( e.constructor.name +": "+ e.message);
          noConstraintViolated = false;
          // restore object to its state before updating
          objToUpdate = objectBeforeUpdate;
        }
        if (noConstraintViolated) {
          if (updatedProperties.length > 0) {
            sTORAGEmANAGER.adapters[adapterName].update( dbName, mc, id, slots, updSlots)
            .then( function () {
              console.log("Properties "+ updatedProperties.toString() +
                  " of "+ mc.Name +" "+ id +" updated.");
              if (typeof resolve === "function") resolve();
            });
          } else {
            console.log("No property value changed for "+ mc.Name +" "+ id +"!");
          }
        }
      }
    });
  });
};
/**
 * Generic method for deleting model objects
 * @method
 * @param {object} mc  The model cLASS concerned
 * @param {string|number} id  The object ID value
 */
sTORAGEmANAGER.prototype.destroy = function (mc, id) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName,
      currentSM = this;
  return new Promise( function (resolve) {
    currentSM.retrieve( mc, id).then( function (record) {
      if (record) {
        sTORAGEmANAGER.adapters[adapterName].destroy( dbName, mc, id)
        .then( function () {
          console.log( mc.Name +" "+ id +" deleted.");
          if (typeof resolve === "function") resolve();
        });
      } else {
        console.log("There is no "+ mc.Name +" with ID value "+ id +" in the database!");
      }
    });
  });
};
/**
 * Generic method for clearing the DB table, or object store, of a cLASS
 * @method
 */
sTORAGEmANAGER.prototype.clearTable = function (mc) {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    sTORAGEmANAGER.adapters[adapterName].clearTable( dbName, mc)
    .then( resolve);
  });
};
/**
 * Generic method for clearing the DB of an app
 * @method
 */
sTORAGEmANAGER.prototype.clearDB = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  return new Promise( function (resolve) {
    if ((typeof confirm === "function" &&
        confirm("Do you really want to delete all data?")) ||
        typeof confirm !== "function") {
      sTORAGEmANAGER.adapters[adapterName].clearDB( dbName)
      .then( resolve);
    }
  });
};
/**
 * Generic method for storing unsaved data on page unload
 * @method
 */
sTORAGEmANAGER.prototype.saveOnUnload = function () {
  var adapterName = this.adapter.name,
      dbName = this.adapter.dbName;
  sTORAGEmANAGER.adapters[adapterName].saveOnUnload( dbName);
};

sTORAGEmANAGER.adapters = {};


/*****************************************************************************
 * Storage management methods for the "LocalStorage" adapter
 * Only in the case of "LocalStorage", due to its non-concurrent architecture,
 * the entire data is loaded into a kind of main memory DB, which is saved
 * back to LocalStorage on page unload.
 ****************************************************************************/
sTORAGEmANAGER.adapters["LocalStorage"] = {
  //-----------------------------------------------------------------
  createEmptyDb: function (dbName, modelClasses) {
  //-----------------------------------------------------------------
    // nothing to do
    return new Promise( function (resolve) {
      resolve();
    });
  },
  //------------------------------------------------
  add: function (dbName, mc, records) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      var newObj=null;
      if (!Array.isArray( records)) {  // single record insertion
        records = [records];
      }
      records.forEach( function (rec) {
        newObj = new mc( rec);
        mc.instances[newObj.id] = newObj;
      })
      resolve( newObj);
    });
  },
  //------------------------------------------------
  retrieve: function (dbName, mc, id) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      resolve( mc.instances[id]);
    });
  },
  //-------------------------------------------------------------
  // *** A LocalStorage-specific, and not an interface method ***
  //-------------------------------------------------------------
  retrieveLsTable: function (mc) {
  //-------------------------------------------------------------
    var key="", keys=[], i=0,
        tableString="", table={},
        tableName = util.class2TableName( mc.Name);
    try {
      if (localStorage[tableName]) {
        tableString = localStorage[tableName];
      }
    } catch (e) {
      console.log( "Error when reading from Local Storage\n" + e);
    }
    if (tableString) {
      table = JSON.parse( tableString);
      keys = Object.keys( table);
      console.log( keys.length + " " + mc.Name + " records loaded.");
      for (i=0; i < keys.length; i++) {
        key = keys[i];
        mc.instances[key] = mc.createObjectFromRecord( table[key]);
      }
    }
  },
  //------------------------------------------------
  retrieveAll: function (dbName, mc) {
    //------------------------------------------------
    var  currentSM = this;
    return new Promise( function (resolve) {
      var records=[];
      /* OLD
      function retrieveAll (mc) {
        var key = "", keys = [], i = 0,
            tableString = "", table={},
            tableName = util.class2TableName( mc.Name);
        // do no retrieve the same class population twice
        if (Object.keys( mc.instances).length > 0) return;
        // first retrieve the population of the classes that are ranges of reference properties
        Object.keys( mc.properties).forEach( function (p) {
          var range = mc.properties[p].range;
          if (range instanceof cLASS) retrieveAll( range);
        });
        currentSM.retrieveTable( mc);      }
      retrieveAll( mc);
      */
      // convert entity map mc.instances to an array list
      records = Object.keys( mc.instances).map( function (key) {return mc.instances[key];});
      resolve( records);
    });
  },
  //------------------------------------------------
  update: function (dbName, mc, id, slots) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      // in-memory object has already been updated in the generic update
      /*
      Object.keys( slots).forEach( function (prop) {
        obj = mc.instances[id];
        obj[prop] = slots[prop];
      });
      */
      resolve();
    });
  },
  //------------------------------------------------
  destroy: function (dbName, mc, id) {  // does not access localStorage
  //------------------------------------------------
    return new Promise( function (resolve) {
      delete mc.instances[id];
      resolve();
    });
  },
  //------------------------------------------------
  clearTable: function (dbName, mc) {
  //------------------------------------------------
    return new Promise( function (resolve) {
      var tableName = util.class2TableName( mc.Name);
      mc.instances = {};
      try {
        localStorage[tableName] = JSON.stringify({});
        console.log("Table "+ tableName +" cleared.");
      } catch (e) {
        console.log("Error when writing to Local Storage\n" + e);
      }
      resolve();
    });
  },
  //------------------------------------------------
  clearDB: function () {
  //------------------------------------------------
    return new Promise( function (resolve) {
      Object.keys( cLASS).forEach( function (key) {
        var tableName="";
        if (cLASS[key].instances) {
          cLASS[key].instances = {};
          tableName = util.class2TableName( cLASS[key].Name);
          try {
            localStorage[tableName] = JSON.stringify({});
          } catch (e) {
            console.log("Error when writing to Local Storage\n" + e);
          }
        }
      });
      resolve();
    });
  },
  //------------------------------------------------
  saveOnUnload: function () {
  //------------------------------------------------
    Object.keys( cLASS).forEach( function (key) {
      var id="", table={}, obj=null, i=0, mc=null,
          keys=[], tableName="";
      if (cLASS[key].instances) {
        mc = cLASS[key];
        keys = Object.keys( mc.instances)
        tableName = util.class2TableName( mc.Name);
        for (i=0; i < keys.length; i++) {
          id = keys[i];
          obj = mc.instances[id];
          table[id] = obj.toRecord();
        }
        try {
          localStorage[tableName] = JSON.stringify( table);
          console.log( keys.length +" "+ mc.Name +" records saved.");
        } catch (e) {
          console.log("Error when writing to Local Storage\n" + e);
        }
      }
    });
  }
};
/**
 * @fileOverview  A port of a C implementation of MT19937, providing a collection of classes
 * and methods used to generate random numbers and random variates. From the Random.js library
 * of SimJS.
 *
 * @copyright Copyright © 1997-2002, Makoto Matsumoto and Takuji Nishimura.
 * @license LGPL
 */


/*
 A C-program for MT19937, with initialization improved 2002/1/26.
 Coded by Takuji Nishimura and Makoto Matsumoto.

 Before using, initialize the state by using init_genrand(seed)
 or init_by_array(init_key, key_length).

 Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:

 1. Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.

 3. The names of its contributors may not be used to endorse or promote
 products derived from this software without specific prior written
 permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// default non-seeded random stream based on Math.random
var rand = null;

/***
 * The following constructor function definition has been modified
 * Use new Date()).getTime() as seed for getting MT with a randomized seed
 */
var Random = function( seed) {
  if (seed === undefined) {
    this.random = Math.random;  // use the JS built-in RNG
  } else {  // use the Mersenne Twister
    if (!Number.isInteger( seed)) {
      throw new TypeError("Seed value must be an integer");
    }
    /* Period parameters */
    this.N = 624;
    this.M = 397;
    this.MATRIX_A = 0x9908b0df;   /* constant vector a */
    this.UPPER_MASK = 0x80000000; /* most significant w-r bits */
    this.LOWER_MASK = 0x7fffffff; /* least significant r bits */

    this.mt = new Array(this.N); /* the array for the state vector */
    this.mti=this.N+1; /* mti==N+1 means mt[N] is not initialized */

    //this.init_genrand(seed);
    this.init_by_array([seed], 1);
  }
};

/* initializes mt[N] with a seed */
Random.prototype.init_genrand = function(s) {
  this.mt[0] = s >>> 0;
  for (this.mti=1; this.mti<this.N; this.mti++) {
    var s = this.mt[this.mti-1] ^ (this.mt[this.mti-1] >>> 30);
    this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
        + this.mti;
    /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */
    /* In the previous versions, MSBs of the seed affect   */
    /* only MSBs of the array mt[].                        */
    /* 2002/01/09 modified by Makoto Matsumoto             */
    this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */
  }
};

/* initialize by an array with array-length */
/* init_key is the array for initializing keys */
/* key_length is its length */
/* slight change for C++, 2004/2/26 */
Random.prototype.init_by_array = function(init_key, key_length) {
  var i, j, k;
  this.init_genrand(19650218);
  i=1; j=0;
  k = (this.N>key_length ? this.N : key_length);
  for (; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
        + init_key[j] + j; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++; j++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
    if (j>=key_length) j=0;
  }
  for (k=this.N-1; k; k--) {
    var s = this.mt[i-1] ^ (this.mt[i-1] >>> 30);
    this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
        - i; /* non linear */
    this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */
    i++;
    if (i>=this.N) { this.mt[0] = this.mt[this.N-1]; i=1; }
  }

  this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */
};

/* generates a random number on [0,0xffffffff]-interval */
Random.prototype.genrand_int32 = function() {
  var y;
  var mag01 = new Array(0x0, this.MATRIX_A);
  /* mag01[x] = x * MATRIX_A  for x=0,1 */

  if (this.mti >= this.N) { /* generate N words at one time */
    var kk;

    if (this.mti == this.N+1)   /* if init_genrand() has not been called, */
      this.init_genrand(5489); /* a default initial seed is used */

    for (kk=0;kk<this.N-this.M;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    for (;kk<this.N-1;kk++) {
      y = (this.mt[kk]&this.UPPER_MASK)|(this.mt[kk+1]&this.LOWER_MASK);
      this.mt[kk] = this.mt[kk+(this.M-this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
    }
    y = (this.mt[this.N-1]&this.UPPER_MASK)|(this.mt[0]&this.LOWER_MASK);
    this.mt[this.N-1] = this.mt[this.M-1] ^ (y >>> 1) ^ mag01[y & 0x1];

    this.mti = 0;
  }

  y = this.mt[this.mti++];

  /* Tempering */
  y ^= (y >>> 11);
  y ^= (y << 7) & 0x9d2c5680;
  y ^= (y << 15) & 0xefc60000;
  y ^= (y >>> 18);

  return y >>> 0;
};

/* generates a random number on [0,0x7fffffff]-interval */
Random.prototype.genrand_int31 = function() {
  return (this.genrand_int32()>>>1);
};

/* generates a random number on [0,1]-real-interval */
Random.prototype.genrand_real1 = function() {
  return this.genrand_int32()*(1.0/4294967295.0);
  /* divided by 2^32-1 */
};

/* generates a random number on [0,1)-real-interval */
Random.prototype.random = function() {
  if (this.pythonCompatibility) {
    if (this.skip) {
      this.genrand_int32();
    }
    this.skip = true;
  }
  return this.genrand_int32()*(1.0/4294967296.0);
  /* divided by 2^32 */
};

/* generates a random number on (0,1)-real-interval */
Random.prototype.genrand_real3 = function() {
  return (this.genrand_int32() + 0.5)*(1.0/4294967296.0);
  /* divided by 2^32 */
};

/* generates a random number on [0,1) with 53-bit resolution*/
Random.prototype.genrand_res53 = function() {
  var a=this.genrand_int32()>>>5, b=this.genrand_int32()>>>6;
  return(a*67108864.0+b)*(1.0/9007199254740992.0);
};

/* These real versions are due to Isaku Wada, 2002/01/09 added */


/**************************************************************************/
Random.prototype.LOG4 = Math.log(4.0);
Random.prototype.SG_MAGICCONST = 1.0 + Math.log(4.5);

Random.prototype.exponential = function (lambda) {
  if (arguments.length != 1) {                         // ARG_CHECK
    throw new SyntaxError("exponential() must "     // ARG_CHECK
        + " be called with 'lambda' parameter"); // ARG_CHECK
  }                                                   // ARG_CHECK

  var r = this.random();
  return -Math.log(r) / lambda;
};

Random.prototype.gamma = function (alpha, beta) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("gamma() must be called"  // ARG_CHECK
        + " with alpha and beta parameters"); // ARG_CHECK
  }                                                   // ARG_CHECK

  /* Based on Python 2.6 source code of random.py.
   */

  if (alpha > 1.0) {
    var ainv = Math.sqrt(2.0 * alpha - 1.0);
    var bbb = alpha - this.LOG4;
    var ccc = alpha + ainv;

    while (true) {
      var u1 = this.random();
      if ((u1 < 1e-7) || (u > 0.9999999)) {
        continue;
      }
      var u2 = 1.0 - this.random();
      var v = Math.log(u1 / (1.0 - u1)) / ainv;
      var x = alpha * Math.exp(v);
      var z = u1 * u1 * u2;
      var r = bbb + ccc * v - x;
      if ((r + this.SG_MAGICCONST - 4.5 * z >= 0.0) || (r >= Math.log(z))) {
        return x * beta;
      }
    }
  } else if (alpha == 1.0) {
    var u = this.random();
    while (u <= 1e-7) {
      u = this.random();
    }
    return - Math.log(u) * beta;
  } else {
    while (true) {
      var u = this.random();
      var b = (Math.E + alpha) / Math.E;
      var p = b * u;
      if (p <= 1.0) {
        var x = Math.pow(p, 1.0 / alpha);
      } else {
        var x = - Math.log((b - p) / alpha);
      }
      var u1 = this.random();
      if (p > 1.0) {
        if (u1 <= Math.pow(x, (alpha - 1.0))) {
          break;
        }
      } else if (u1 <= Math.exp(-x)) {
        break;
      }
    }
    return x * beta;
  }

};

Random.prototype.normal = function (mu, sigma) {
  if (arguments.length != 2) {                          // ARG_CHECK
    throw new SyntaxError("normal() must be called"  // ARG_CHECK
        + " with mu and sigma parameters");      // ARG_CHECK
  }                                                    // ARG_CHECK

  var z = this.lastNormal;
  this.lastNormal = NaN;
  if (!z) {
    var a = this.random() * 2 * Math.PI;
    var b = Math.sqrt(-2.0 * Math.log(1.0 - this.random()));
    z = Math.cos(a) * b;
    this.lastNormal = Math.sin(a) * b;
  }
  return mu + z * sigma;
};

Random.prototype.pareto = function (alpha) {
  if (arguments.length != 1) {                         // ARG_CHECK
    throw new SyntaxError("pareto() must be called" // ARG_CHECK
        + " with alpha parameter");             // ARG_CHECK
  }                                                   // ARG_CHECK

  var u = this.random();
  return 1.0 / Math.pow((1 - u), 1.0 / alpha);
};

Random.prototype.triangular = function (lower, upper, mode) {
  // http://en.wikipedia.org/wiki/Triangular_distribution
  if (arguments.length != 3) {                         // ARG_CHECK
    throw new SyntaxError("triangular() must be called" // ARG_CHECK
        + " with lower, upper and mode parameters");    // ARG_CHECK
  }                                                   // ARG_CHECK

  var c = (mode - lower) / (upper - lower);
  var u = this.random();

  if (u <= c) {
    return lower + Math.sqrt(u * (upper - lower) * (mode - lower));
  } else {
    return upper - Math.sqrt((1 - u) * (upper - lower) * (upper - mode));
  }
};

Random.prototype.uniform = function (lower, upper) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("uniform() must be called" // ARG_CHECK
        + " with lower and upper parameters");    // ARG_CHECK
  }                                                   // ARG_CHECK
  return lower + this.random() * (upper - lower);
};
/***
 Added by Gerd Wagner (20160921)
 */
Random.prototype.uniformInt = function (lower, upper) {
  if (arguments.length != 2 ||
      !(Number.isInteger(lower) && Number.isInteger(upper))) {
    throw new SyntaxError("uniformInt() must be called"
        + " with lower and upper integer values");
  }
  return lower + Math.floor( this.random() * (upper - lower + 1));
};

Random.prototype.weibull = function (alpha, beta) {
  if (arguments.length != 2) {                         // ARG_CHECK
    throw new SyntaxError("weibull() must be called" // ARG_CHECK
        + " with alpha and beta parameters");    // ARG_CHECK
  }                                                   // ARG_CHECK
  var u = 1.0 - this.random();
  return alpha * Math.pow(-Math.log(u), 1.0 / beta);
};

/*******************************************************************************
 * This library file contains several OES foundation elements
 * @copyright Copyright 2016 Gerd Wagner, BTU (Germany) + ODU (VA, USA)
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
/*
 TODO
 - add oes.defaults:
   oes.defaults.license = "CC BY-SA";
 */
var oes = oes || {};
var sim = sim || {};

oes.defaults = {
  license: "CC BY-SA",
  imgFolder: "img/"
};
oes.predfinedProperties = ["shortLabel", "history"];

oes.Object = new cLASS({
  Name: "oBJECT",
  isAbstract: true,
  properties: {
    "id": {range: "Integer"},
    "name": {range: "NonEmptyString", optional:true}
  },
  methods: {
    "toLogString": function () {
      var str1="", str2="", i=0;
      if (!this.constructor.shortLabel && !this.name) return "";
      else {  // show class name + object ID
        str1 = this.name || this.constructor.shortLabel +"-"+ this.id;
      }
      str2 = "{ ";
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[this.constructor.Name].properties[key],
            val = this[key], propLabel="", valStr="", listOfActTypeNames=[];
        if (key==="activityState") {
          listOfActTypeNames = Object.keys( val);
          valStr = JSON.stringify( listOfActTypeNames.map( function (atn) {
            var shortLabel = cLASS[atn].shortLabel;
            return shortLabel || atn;
          }));
          propLabel = "actState";
        } else if (propDecl && propDecl.shortLabel) {
          propLabel = propDecl.shortLabel;
          if (cLASS[propDecl.range]) {  // a reference property
            // is the property multi-valued?
            if (propDecl.maxCard && propDecl.maxCard > 1) {
              if (Array.isArray( val)) {
                valStr = JSON.stringify( val.map( function (o) {return o.id;}));
              } else valStr = JSON.stringify( Object.keys( val));
            } else {  // if the property is single-valued
              valStr = val.id;
            }
          } else {  // if the property is not a reference property
            if (typeof val === "number" && !Number.isInteger(val) && sim.timeRoundingFactor) {
              valStr = JSON.stringify( Math.round(
                         val * sim.timeRoundingFactor) / sim.timeRoundingFactor);
            } else valStr = JSON.stringify( val);
          }
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +": "+ valStr;
          i = i+1;
        }
      }, this);
      str2 += "}";
      if (str2 === "{ }") str2 = "";
      return str1 + str2;
    }
  }
});
oes.Event = new cLASS({
  Name: "eVENT",
  isAbstract: true,
  properties: {
    // for events with duration: occTime = startTime + duration
    "occTime": {range: "NonNegativeNumber"},
    "priority": {range: "NonNegativeNumber", optional:true},
    // only meaningful for events with duration
    "startTime": {range: "NonNegativeNumber", optional:true},
    "duration": {range: "NonNegativeNumber", optional:true}
  },
  methods: {
    "toLogString": function () {
      var occT = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( this.occTime * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          this.occTime;
      var str1="", str2="", evtStr="", i=0,
          eventTypeName = this.constructor.Name, AT=null,
          propDs={}, slots={};
      switch (eventTypeName) {
      case "aCTIVITYsTART":
        AT = cLASS[this.activityType];
        if (!AT.shortLabel) return "";
        str1 = AT.shortLabel + "Start";
        propDs = AT.properties;
        slots = this.resources;
        break;
      case "pROCESSINGaCTIVITYsTART":
        break;
      case "aCTIVITYeND":
        AT = cLASS[this.activityType];
        if (!AT.shortLabel) return "";
        str1 = AT.shortLabel + "End";
        propDs = AT.properties;
        slots = {"activityIdRef": this.activityIdRef};
        break;
      default:
        if (!this.constructor.shortLabel) return "";
        str1 = this.constructor.shortLabel;
        propDs = cLASS[eventTypeName].properties;
        slots = this;
      }
      str2 = "{";
      Object.keys( slots).forEach( function (p) {
        var propDecl = propDs[p], val = slots[p], propLabel="", valStr="";
        if (propDecl && propDecl.shortLabel) {
          propLabel = propDecl.shortLabel;
          if (cLASS[propDecl.range]) {  // a reference property
            valStr = val.id;
          } else {  // if the property is not a reference property
            if (typeof val === "number" && !Number.isInteger(val) && sim.timeRoundingFactor) {
              valStr = JSON.stringify( Math.round(
                      val * sim.timeRoundingFactor) / sim.timeRoundingFactor);
            } else valStr = JSON.stringify( val);
          }
        }
        if (val !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +":"+ valStr;
          i = i+1;
        }
      });
/*
      Object.keys( this).forEach( function (key) {
        var propDecl = cLASS[eventTypeName].properties[key],
            val = this[key], propLabel="", valStr="";
        if (propDecl && propDecl.shortLabel) {
          propLabel = propDecl.shortLabel;
          if (cLASS[propDecl.range]) {  // a reference property
            valStr = val.id;
          } else {  // if the property is not a reference property
            if (typeof val === "number" && !Number.isInteger(val) && sim.timeRoundingFactor) {
              valStr = JSON.stringify( Math.round(
                      val * sim.timeRoundingFactor) / sim.timeRoundingFactor);
            } else valStr = JSON.stringify( val);
          }
        }
        if (this[key] !== undefined && propLabel) {
          str2 += (i>0 ? ", " : "") + propLabel +":"+ valStr;
          i = i+1;
        }
      }, this);
*/
      str2 += "}";
      if (str2 === "{}") str2 = "";
      evtStr = str1 + str2 + "@" + occT;
      return evtStr;
    }
  }
});
// compare function for Array.sort
oes.Event.rank = function (e1, e2) {
  var p1=0, p2=0;
  if (e1.priority) p1 = e1.priority;
  if (e2.priority) p2 = e2.priority;
  return p2 - p1;
}
/**
 *  Activities are events having some duration and using resources. Their duration
 *  may be either pre-set to a fixed value or to a random value (in which case they
 *  have a scheduled end), or it may be determined by the occurrence of an activity
 *  end event that is caused by another simulation event (in which case they have an
 *  open end). The duration of a pre-set duration activity can be defined in 3 ways:
 *  either for all activities of some type AT by a) a class-level attribute
 *  AT.fixedDuration or b) a class-level method AT.randomDuration(), or
 *  c) by setting the attribute "duration" of its aCTIVITYsTART event.
 *
 *  Activities may consume, and also produce, resources. The actor(s)
 *  that (jointly) perform(s) an activity can be viewed as (a) special resource(s).
 *  At any simulation step there is a (possibly empty) set of ongoing activities.
 *  The objects that participate in an ongoing activity as resources are in a
 *  certain activity state (e.g., "printing", "service-performing"), in which they
 *  are no more available for other activities that try to allocate them as
 *  resources, if their resource role is exclusive/non-shareable.
 *
 *  For any resource of an activity, its utilization by that activity during
 *  a certain time period is measured by the simulator and can be included
 *  in the ex-post statistics.
 *
 *  An activity type is defined as a subtype of the OES class "aCTIVITY" with a
 *  mandatory class-level method "generateId" and a mandatory class-level attribute
 *  "resourceTypes", and an optional class-level method "randomDuration" or,
 *  alternatively, an optional class-level attribute "fixedDuration".
 *
 *  A pre-defined event type oes.ActivityStart is used for creating activity start
 *  events with a constructor parameter "resources" defining a resource roles map
 *  assigning resource object references to resource role names. When an activity
 *  start event occurs, a JS object representing the activity is created, the
 *  resource roles map is copied to corresponding property slots of the activity,
 *  and the value of the activityState property of all resource objects is updated
 *  by adding the activity type name (the activityState is a set/map of the names
 *  of those types of activities, in which the object is participating).
 */
oes.Activity = new cLASS({
  Name: "aCTIVITY",
  supertypeName: "eVENT",
  isAbstract: true,
  properties: {
    "id": {range: "Integer"},
    // on activity creation resource roles are copied to corresp. property slots
    "resources": {range: cLASS.Map("oBJECT"), optional:true}
  },
  methods: {}
});
oes.ActivityStart = new cLASS({
  Name: "aCTIVITYsTART",
  supertypeName: "eVENT",
  properties: {
    "activityType": {range: "ActivityType"},  //TODO: should allow type names (like IdRefs)
    "resources": {range: cLASS.Map("oBJECT"), optional:true}
  },
  methods: {
    "toLogString": function () {
      var occT = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( this.occTime * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          this.occTime;
      var str1 = cLASS[this.activityType].shortLabel, str2 = "";
      if (!str1) return "";
      str1 += "Start";
      Object.keys( this.resources).forEach( function (resRole) {
        var resObj = this.resources[resRole];
        str2 += (resObj.name || String(resObj.id)) +", ";
      }, this);
      return str1 +"("+ str2.slice(0, -2) +")" + "@" + occT;
    }
  }
});
oes.ActivityEnd = new cLASS({
  Name: "aCTIVITYeND",
  supertypeName: "eVENT",
  properties: {
    "activityType": {range: "ActivityType"},
    "activityIdRef": {range: "Integer"}
  },
  methods: {
    "toLogString": function () {
      var occT = sim.model.time === "continuous" && sim.timeRoundingFactor ?
          Math.round( this.occTime * sim.timeRoundingFactor) / sim.timeRoundingFactor :
          this.occTime;
      var str1 = cLASS[this.activityType].shortLabel, str2 = "",
          resources = sim.ongoingActivities[this.activityIdRef].resources;
      if (!str1) return "";
      str1 += "End";
      Object.keys( resources).forEach( function (resRole) {
        var resObj = resources[resRole];
        str2 += (resObj.name || String(resObj.id)) +", ";
      }, this);
      return str1 +"("+ str2.slice(0, -2) +")" + "@" + occT;
    }
  }
});
/**
 * Processing nodes are objects that play an actor role in processing activities.
 * The definition of a processing node combines defining both an object (as actor)
 * and an implicit activity type, possibly with duration, resource types and
 * onActivityStart/onActivityEnd event rule methods.
 *
 * A simple processing node has an input queue for work objects and a successor
 * processing node. Work objects may be either of a generic type "wORKoBJECT" or
 * of a model-specific subtype of "wORKoBJECT" (such as "Customer").
 *
 * A processing node object may be defined with a value for its "fixedDuration"
 * property or with a "randomDuration" function, applying to its processing
 * activities. If neither a fixedDuration nor a randomDuration method are defined,
 * the exponential distribution with an event rate of 1 is used as a default
 * function for getting durations. By default, a processing node processes one
 * work object at a time, but it may also have its "capacity" attribute set to
 * a value greater than 1.
 *
 * In the general case, a processing node may have several input object types,
 * and an input queue for each of them, and either a successor processing node or
 * else an (automatically generated) output queue for each type of output object.
 * By default, when no explicit transformation of inputs to outputs is modeled by
 * specifying an outputTypes map, there is no transformation and it holds that
 * outputs = inputs.
 *
 * TODO: Add resourceTypes
 */
oes.ProcessingNode = new cLASS({
  Name: "pROCESSINGnODE",
  supertypeName: "oBJECT",
  properties: {
    "inputQueue": {range: "oBJECT", shortLabel:"inpQ", minCard: 0, maxCard: Infinity},
    "inputType": {range: "ObjectType", optional:true},  // default: "wORKoBJECT"
    "successorNode": {range: "pROCESSINGnODE|eXITnODE", optional:true},
    "fixedDuration": {range: "PositiveInteger", optional:true},
    "capacity": {range: "PositiveInteger", optional:true},
    // Ex: {"lemons": {type:"Lemon", quantity:2}, "ice": {type:"IceCubes", quantity:[0.2,"kg"]},...
    "inputTypes": {range: cLASS.Map( Object), optional:true},
    // Ex: {"lemonade": {type:"Lemonade", quantity:[1,"l"]}, ...
    "outputTypes": {range: cLASS.Map( Object), optional:true},
    // a map with output role names as keys
    "successorNodes": {range: cLASS.Map("pROCESSINGnODE|eXITnODE"), optional:true}
  },
  methods: {}
});
/**
 * Work Objects are generic objects that arrive at an entry node of a PN
 * and are processed at one or more processing nodes before they leave the
 * PN at an exit node.
 */
oes.WorkObject = new cLASS({
  Name: "wORKoBJECT",
  supertypeName: "oBJECT",
  properties: {
    "arrivalTime": { range: "Number", label: "Arrival time",
      shortLabel: "arrT"}
  }
});
/**
 * Processing Activities are activities that have inputs and outputs and are
 * performed by a processing node (as their actor). The input types/roles,
 * output types/roles and duration of a processing activity are defined in its
 * underlying processing node, which is associated via its "actor" property.
 *
 * A processing node object definition may have slots for defining a "fixedDuration"
 * attribute or a "randomDuration" method.
 */
oes.ProcessingActivity = new cLASS({
  Name: "pROCESSINGaCTIVITY",
  shortLabel: "ProcAct",  // for the log
  supertypeName: "aCTIVITY",
  properties: {
    "actor": {range: "pROCESSINGnODE"}
  },
  methods: {}
});
// define the exponential distribution as the default inter-arrival time
oes.ProcessingActivity.defaultEventRate = 1;
oes.ProcessingActivity.defaultDuration = function () {
  return rand.exponential(  oes.ProcessingActivity.defaultEventRate)
};

oes.ProcessingActivityStart = new cLASS({
  Name: "pROCESSINGaCTIVITYsTART",
  supertypeName: "aCTIVITYsTART",
  properties: {
    "actor": {range: "pROCESSINGnODE"}
  },
  methods: {}
});
oes.ProcessingActivityEnd = new cLASS({
  Name: "pROCESSINGaCTIVITYeND",
  supertypeName: "aCTIVITYeND",
  properties: {},
  methods: {}
});
/**
 * Entry nodes are objects that participate in exogenous arrival events
 * leading to the creation of work objects, which are either routed to a
 * successor node or pushed to an output queue. The definition of an entry
 * node combines defining both a (possibly spatial) object and an associated
 * implicit arrival event type, possibly with an "onArrival" event rule method.
 *
 * Entry node object definitions may include (1) a "successorNode" attribute slot
 * for assigning a successor node to which work objects are routed; (2) a
 * "maxNmrOfArrivals" attribute slot for defining a maximum number of arrival
 * events after which no more arrival events will be created (and, consequently,
 * the simulation may run out of future events); (3) either an "arrivalRate"
 * attribute slot for defining the event rate parameter of an exponential pdf
 * used for computing the time between two consecutive arrival events, or a per-
 * instance-defined "arrivalRecurrence" method slot for computing the recurrence
 * of arrival events; (4) a per-instance-defined "outputType" slot for defining
 * a custom output type (instead of the default "wORKoBJECT"). If neither an
 * "arrivalRate" nor an "arrivalRecurrence" method are defined, the exponential
 * distribution with an event rate of 1 is used as a default recurrence.
 *
 * Entry nodes have a built-in (read-only) statistics attribute "nmrOfArrivedObjects"
 * counting the number of objects that have arrived at the given entry node.
 *
 * TODO: If no successor node is defined for an entry node, an output queue is
 * automatically created.
 */
oes.EntryNode = new cLASS({
  Name: "eNTRYnODE",
  supertypeName: "oBJECT",
  properties: {
    "outputType": {range: "ObjectType", optional:true},  // default: "wORKoBJECT"
    "successorNode": {range: "pROCESSINGnODE", optional:true},
    "maxNmrOfArrivals": {range: "PositiveInteger", optional:true},
    "arrivalRate": {range: "Decimal", optional:true},
    "nmrOfArrivedObjects": {range: "NonNegativeInteger", optional:true}
  }
});
/**
 * Exit nodes are objects that participate in departure events leading to the
 * destruction of the departing object. The definition of an exit node combines
 * defining both a (possibly spatial) object and an associated implicit departure
 * event type, possibly with an "onDeparture" event rule method.
 *
 * Exit nodes have two built-in statistics attributes: (1) "nmrOfDepartedObjects"
 * counting the number of objects that have departed at the given exit node, and
 * (2) "cumulativeTimeInSystem" for adding up the times in system of all departed
 * objects.
 */
oes.ExitNode = new cLASS({
  Name: "eXITnODE",
  supertypeName: "oBJECT",
  properties: {
    "nmrOfDepartedObjects": {range: "NonNegativeInteger", optional:true},
    "cumulativeTimeInSystem": {range: "NonNegativeDecimal", optional:true}
  }
});
/**
 * Arrival events are associated with an entry node.
 * They may define a quantity of arrived work objects, which is 1 by default.
 * Viewing an arrival not as an arrival of work objects, but as an arrival of
 * a customer order, the quantity attribute would allow to define an order
 * quantity that results in the same quantity of work objects (or production
 * orders) pushed to the entry node's succeeding processing node.
 */
oes.Arrival = new cLASS({
  Name: "aRRIVAL",
  supertypeName: "eVENT",
  properties: {
    "entryNode": {range: "eNTRYnODE"},
    "quantity": {range: "PositiveInteger", optional:true}
  }
});
// define the exponential distribution as the default inter-arrival time
oes.Arrival.defaultEventRate = 1;
oes.Arrival.defaultRecurrence = function () {
  return rand.exponential( oes.Arrival.defaultEventRate);
};
/**
 * Departure events have two participants: an exit node and the departing object.
 */
oes.Departure = new cLASS({
  Name: "dEPARTURE",
  supertypeName: "eVENT",
  properties: {
    "exitNode": {range: "eXITnODE"},
    "workObject": {range: "wORKoBJECT"}
  }
});
//=================================================
/**
 * Classes for storing experiment data
 */
oes.Experiment = new cLASS({
  Name: "eXPERIMENT",
  properties: {
    "id": {range: "NonEmptyString"},  // possibly the simulation ID
    "replications": {range:"PositiveInteger", label:"Number of replications"},
    "parameterNames": {range: Array, label: "Experiment parameter names"},
    "parameterValueSetDefs": {range: Array, label: "Parameter value set definitions"},
    "seeds": {range: Array, optional:true}  // seeds.length = #replications
  }
});
oes.ExperimentScenarioRun = new cLASS({
  Name: "eXPERIMENTsCENARIOrUN",
  properties: {
    "experimentRunId": {range: "NonEmptyString"},  // possibly a timestamp
    "experimentScenarioNo": {range: "PositiveInteger"},
    "parameterValueCombination": {range: Array},
    "outputStatistics": {range: Object}
  }
});

/**
 * Define lists of predefined cLASSes as reserved names for constraint checks
 */
oes.predefinedObjectTypes = ["oBJECT","wORKoBJECT","pROCESSINGnODE","eNTRYnODE","eXITnODE"];
oes.predefinedEventTypes = ["eVENT","aCTIVITYsTART","aCTIVITYeND","aRRIVAL",
    "pROCESSINGaCTIVITYsTART","pROCESSINGaCTIVITYeND","dEPARTURE"];
oes.predefinedActivityTypes = ["aCTIVITY","pROCESSINGaCTIVITY"];

/******************************************************************************
 *** OES Model Objects scenario/model/statistics/etc. *************************
 ******************************************************************************/

// Define the schema of the model object "scenario"
sim.scenario = {
  objectName: "scenario",
  properties: {
    "simulationEndTime": {range:"Time", label:"End time:", hint:"Simulation end time"},
    "name": {range:"NonEmptyString", optional: true, label:"Name", hint:"Scenario name"},
    "title": {range:"NonEmptyString", optional: true, label:"Title", hint:"Scenario title"},
    "shortDescription": {range:"String", optional: true, label:"Scenario description",
        hint:"Short description of the simulation scenario"},
    "creator": {range:"String", optional: true, label:"Creator",
        hint:"Creator of simulation model"},
    "created": {range:"String", optional: true, label:"Created on",
        hint:"Creation date"},
    "modified": {range:"String", optional: true, label:"Modified on",
      hint:"Modification date"},
    "stepDuration": {range:"NonNegativeInteger", optional: true, label:"Step duration:"},
    "randomSeed": {range:"PositiveInteger", optional: true, label:"Random seed:"},
    "visualize": {range:"Boolean", optional: true, initialValue: true, label:"Visualization"},
    "createLog": {range:"Boolean", optional: true, label:"Log", hint:"Simulation log"}
    //"logOnly": {range:["Species","Animal"], maxCard:2, dependsOn:"createLog", label:"Restrict log to"},
  }
};

sim.experiment = {
  objectName: "experiment",
  properties: {
    "replications": {range:"PositiveInteger", label:"Number of replications"},
    "parameters": {range: Array, label: "Experiment parameters"},
    "seeds": {range: Array, optional: true},
  },
  replications: 0,
  parameters: [],
  scenarios:[],  // are created by the simulator
  validate: function () {
    var exp = sim.experiment;
    if (exp.replications > 0) {
      return Array.isArray( exp.seeds) && exp.seeds.length === exp.replications;
    }
  }
};

// Define the schema of the model object "config"
sim.config = {
  objectName: "config",
  properties: {
    "createLog": {range:"Boolean", optional: true, label:"Log", hint:"Simulation log"},
    "visualize": {range:"Boolean", optional: true, initialValue: true, label:"Visualization"},
    "userInteractive": {range:"Boolean", optional: true, label:"User-interactive"}
  }
};
// Define the schema of the model object "sim"
sim.objectName = "sim";
sim.properties = {
  "step": {range:"NonNegativeInteger", label:"Step:", hint:"Simulation step"},
  "time": {range:"Number", label:"Time:", hint:"Simulation time"}
};
sim.space = {overlayGrid: {}};

// Define the schema of the observationUI
sim.scenario.observationUI = {
  objectName: "observationUI",
  canvas: {},
  properties: {
    "spaceView": {range: Object, label: "Space view"},
    "objectViews": {range: Object, label: "Object views"}
  }
};
// define the observationUI.monitor
sim.scenario.observationUI.monitor = {};
// Define the schema of the scenario.observationUI.spaceView
sim.scenario.observationUI.spaceView = {
  objectName: "spaceView",
  properties: {
    "type": {range: "NonEmptyString", label: "Space view type"},
    "gridCellSize": {range: "PositiveInteger", label: "Grid cell size"}
  }
};
// define the visualization record for non-spatial models
sim.scenario.observationUI.vis = {SVG:{}};
// define the objectViews definition map
sim.scenario.observationUI.objectViews = {};
// define the map for runtime objectViews
sim.objectViews = {};

// Define the schema of the model object "model"
sim.model = sim.model || {};
sim.model.v = {};  // global variables
sim.model.f = {};  // global functions

//TODO: can this be dropped?
oes.defineSimModelSchema = function () {
  sim.model.objectName = "model";
  sim.model.properties = {
    "name": {range:"NonEmptyString", label:"Name"},
    "title": {range:"NonEmptyString", label:"Title", hint:"Model title"},
    "shortDescription": {range:"String", optional: true, label:"Model description",
      hint:"Short description of the simulation model"},
    "systemNarrative": {range:"String", optional: true, label:"System narrative",
        hint:"Narrative of the system under investigation"},
    "license": {range:"String", optional: true, label:"License",
      hint:"Copyright license"},
    "creator": {range:"String", optional: true, label:"Creator",
      hint:"Creator of simulation model"},
    "created": {range:"String", optional: true, label:"Created on",
      hint:"Creation date"},
    "modified": {range:"String", optional: true, label:"Modified on",
      hint:"Modification date"},
    "time": {range:["discrete","continuous"], optional: true,
      label:"Time model", hint:"Either 'discrete' (default) or 'continuous'"},
    "timeUnit": {range:["ms","s","m","h","D","W","M","Y"], optional: true,
        label:"Time unit", hint:"A time unit like 'ms', 's' or 'm'"},
    "timeIncrement": {range:"Decimal", optional: true, label:"Time increment",
        hint:"By default: 1"},
    "objectTypes": {range: Array, label:"Object types"},
    "eventTypes": {range: Array, label:"Event types"},
    "activityTypes": {range: Array, optional: true, label:"Activity types"}
  };
  // Define the schema of the model object "model.space"
  sim.model.space.objectName = "spaceModel";
  sim.model.space.properties = {
      "type": {range:["1D-Grid","IntegerGrid","ObjectGrid","3D-Grid","1D","2D","3D"], label:"Space type"},
      "geometry": {range:["TOROIDAL","EUCLIDEAN"], optional: true, label:"Space geometry",
        hint:"Either 'TOROIDAL' (default) or 'EUCLIDEAN'"},
      "xMax": {range:"NonNegativeInteger", label:"Width", hint:"Maximum x value"},
      "yMax": {range:"NonNegativeInteger", optional: true, label:"Height", hint:"Maximum y value"},
      "zMax": {range:"NonNegativeInteger", optional: true, label:"Depth", hint:"Maximum z value"}
  };
};
sim.model.objectName = "model";
sim.model.properties = {
  "name": {range:"NonEmptyString", label:"Name"},
  "title": {range:"NonEmptyString", label:"Title", hint:"Model title"},
  "shortDescription": {range:"String", optional: true, label:"Model description",
    hint:"Short description of the simulation model"},
  "systemNarrative": {range:"String", optional: true, label:"System narrative",
    hint:"Narrative of the system under investigation"},
  "license": {range:"String", optional: true, label:"License",
    hint:"Copyright license"},
  "creator": {range:"String", optional: true, label:"Creator",
    hint:"Creator of simulation model"},
  "created": {range:"String", optional: true, label:"Created on",
    hint:"Creation date"},
  "modified": {range:"String", optional: true, label:"Modified on",
    hint:"Modification date"},
  "time": {range:["discrete","continuous"], optional: true,
    label:"Time model", hint:"Either 'discrete' (default) or 'continuous'"},
  "timeUnit": {range:["ms","s","m","h","D","W","M","Y"], optional: true,
    label:"Time unit", hint:"A time unit like 'ms', 's' or 'm'"},
  "timeIncrement": {range:"Decimal", optional: true, label:"Time increment",
    hint:"By default: 1"},
  "objectTypes": {range: Array, label:"Object types"},
  "eventTypes": {range: Array, label:"Event types"},
  "activityTypes": {range: Array, optional: true, label:"Activity types"}
};
// Define the schema of the model object "model.space"
sim.model.space = sim.model.space || {};
sim.model.space.objectName = "spaceModel";
sim.model.space.properties = {
  "type": {range:["1D-Grid","IntegerGrid","ObjectGrid","3D-Grid","1D","2D","3D"], label:"Space type"},
  "geometry": {range:["TOROIDAL","EUCLIDEAN"], optional: true, label:"Space geometry",
    hint:"Either 'TOROIDAL' (default) or 'EUCLIDEAN'"},
  "xMax": {range:"NonNegativeInteger", label:"Width", hint:"Maximum x value"},
  "yMax": {range:"NonNegativeInteger", optional: true, label:"Height", hint:"Maximum y value"},
  "zMax": {range:"NonNegativeInteger", optional: true, label:"Depth", hint:"Maximum z value"}
};

// Define the schema of the model object "scenario.initialState"
sim.scenario.initialState = {
  objectName: "initialState",
  properties: {
    // a map, and therefore an instance of Object
    "objects": {range: Object, optional: true, label:"Initial objects"},
    // a map, and therefore an instance of Object
    "events": {range: Object, optional: true, label:"Initial events"}
  },
  check: function () {
    var errors=[];
    var isProcNetSim = this.objects &&
            Object.keys( this.objects).some( function (objIdStr) {
              return this.objects[objIdStr].typeName === "eNTRYnODE";
            }, this);
    if (!this.events && !isProcNetSim &&
        !(sim.model.timeIncrement || sim.model.OnEachTimeStep)) {
      errors.push("There must be at least one initial event when neither " +
          "a time increment nor an 'OnEachTimeStep' method has been defined.");
    }
    if (!this.objects) return;
    Object.keys( this.objects).forEach( function (objIdStr) {
      var slots={}, Class=null;
      // check object IDs
      if (String( parseInt( objIdStr)) !== objIdStr) {
        errors.push("An object has a non-integer ID: "+ objIdStr);
      }
      slots = this.objects[objIdStr];
      Class = cLASS[slots.typeName];
      Object.keys( slots).forEach( function (p) {
        var decl = Class.properties[p], constrVio=null;
        if (decl) {
          constrVio = cLASS.check( p, decl, slots[p]);
          if (!(constrVio instanceof NoConstraintViolation)) {
            errors.push( slots.typeName +"("+ objIdStr +"): "+ constrVio.message);
          }
        }
      });
    }, this);
    return errors;
  }
};
// Define the schema of the model object "scenario.initialStateUI"
sim.scenario.initialStateUI = {
  objectName: "initialStateUI",
  properties: {
    "editableProperties": {range: Object, label:"Editable properties"}
  },
  check: function () {
    if (!this.editableProperties) return;
    Object.keys( this.editableProperties).forEach( function (className) {
      // ...
    }, this);
  }
};
sim.scenario.initialStateUI.editableProperties = {};

/**
 * Check correctness of scenario/model definitions
 *
 * @method
 * @author Gerd Wagner
 */
oes.verifySimulation = function () {
  var errMsgs=[];

  function checkModelObject( mo) {  // mo = model object
    var props = mo.properties, errors=[];
    if (!props) {
      errors.push("The model object "+ mo.objectName +" does not have a declaration of 'properties'!");
      return;
    }
    // check property slots
    Object.keys( props).forEach( function (prop) {
      var constrVio = cLASS.check( prop, props[prop], mo[prop]);
      if (!(constrVio instanceof NoConstraintViolation)) {
        errors.push( constrVio.constructor.name +": "+ constrVio.message);
      }
    });
    if (mo.check) {  // invoke specific check method
      errors.merge( mo.check());
    }
    if (errors.length > 0) {
      errors.forEach( function (err, i) {
        errors[i] = "["+ mo.objectName +"] " + err;
      });
    }
    return errors;
  }
  // check model definition
  errMsgs.merge( checkModelObject( sim.model));
  // check SPACE model definition
  if (sim.model.space.type) {
    errMsgs.merge( checkModelObject( sim.model.space));
  }
  // check scenario definition
  errMsgs.merge( checkModelObject( sim.scenario));
  // check initial state definition
  errMsgs.merge( checkModelObject( sim.scenario.initialState));
  // check definitions of STATISTICS variables
  if (sim.model.statistics) {
    Object.keys( sim.model.statistics).forEach( function (varName) {
      var statVar = sim.model.statistics[varName],
          aggrFunc = statVar.aggregationFunction;
      // variable bound to specific object
      if (statVar.objectIdRef && !statVar.objectType) {
        errMsgs.push( "Invalid definition of statistics variable <var>"+
            varName +"</var>: No objectType provided!");
      }
      // aggregation function must be defined
      if (aggrFunc && typeof( oes.stat[aggrFunc]) !== 'function') {
        errMsgs.push( "Invalid definition of statistics variable <var>"+
            varName +"</var>: <code>"+ aggrFunc +
            "</code> is not an admissible aggregation function name!");
      }
      // variable is bound to an aggregate over an ObjectType population
      if (!statVar.objectIdRef && statVar.property && !(OT && cLASS[OT] && aggrFunc)) {
        errMsgs.push( "Invalid definition of statistics variable <var>"+
            varName +"</var>:"+ (!OT ? " object type name missing!" :
                                 !cLASS[OT] ? " object type "+ OT +" not defined!" :
                                 !aggrFunc ? " aggregationFunction missing!":""));
      }
      //TODO: add further checks!
    });
  }
  // check constraints
  if (sim.model.constraints) {
    Object.keys( sim.model.constraints).forEach( function (constrName) {
      var constraint = sim.model.constraints[constrName];
      if (!constraint()) {
        errMsgs.push( 'The constraint "'+ constrName +'" is violated in the initial state!');
      }
    })
  }
  return errMsgs;
};
/**
 * Set up front-end simulation environment
 *
 * @method
 * @author Gerd Wagner
 */
oes.setupFrontEndSimEnv = function () {
  var errors=[], el=null;
  sim.initializeSimulator();
  // initialize space model
  if (sim.model.space.type) oes.space.initialize();
  // set up initial state
  sim.initializeModelVariables();
  sim.createInitialObjEvt();
  // initialize statistics
  if (sim.model.statistics) oes.stat.initialize();
  // check simulation definition constraints
  if (sim.config.environmentType === "frameworkDev") {
    errors = oes.verifySimulation();
    if (errors.length > 0) {
      el = dom.createElement("div", {id:"errors"});
      el.appendChild( dom.createElement("h1", {content: "Errors"}));
      errors.forEach( function (err) {
        el.appendChild( dom.createElement("p", {content: err}));
      });
      document.body.insertBefore( el, document.body.firstElementChild);
    }
  }
  // set up the UI
  oes.ui.setupUI();
  // visualize initial state (step 0)
  if (sim.config.visualize) oes.ui.visualizeStep();
};

/*******************************************************************************
 * EventList maintains an ordered list of events
 * @copyright Copyright 2015-2016 Gerd Wagner
 *   Chair of Internet Technology, Brandenburg University of Technology, Germany.
 * @license The MIT License (MIT)
 * @author Gerd Wagner
 ******************************************************************************/
var oes = oes || {};
oes.EventList = function EventList(a) {
  this.events = Array.isArray(a) ? a : [];
 };
oes.EventList.prototype.add = function (e) {
  this.events.push( e);
  this.events.sort( function (e1, e2) {
    return e1.occTime - e2.occTime;
  });
};
oes.EventList.prototype.getNextOccurrenceTime = function () {
  if (this.events.length > 0) return this.events[0].occTime;
  else return 0;
};
oes.EventList.prototype.getNextEvent = function () {
  if (this.events.length > 0) return this.events[0];
  else return null;
};
oes.EventList.prototype.isEmpty = function () {
  return (this.events.length <= 0);
};
oes.EventList.prototype.removeNextEvents = function () {
  var nextTime=0, nextEvents=[];
  if (this.events.length === 0) return [];
  nextTime = this.events[0].occTime;
  while (this.events.length > 0 && this.events[0].occTime === nextTime) {
    nextEvents.push( this.events.shift());
  }
  return nextEvents;
};
oes.EventList.prototype.clear = function (e) {
  this.events = [];
};
oes.EventList.prototype.containsEventOfType = function (evtType) {
  return this.events.some( function (evt) {
    return evt.constructor.Name === evtType;
  });
};
oes.EventList.prototype.toString = function () {
  var str="";
  if (this.events.length > 0) {
    str = this.events.reduce( function (serialization, e) {
      return serialization +", "+ e.toLogString();
    }, "");
    str = str.slice(1);
  }
  return str;
};

/**
 * @fileOverview Variables and procedures for (ex-post) statitsics
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 */
// create namespace oes if not already created by some other "module"
if (typeof oes !== "object") var oes = {};
/**
 * Computation of the simulation statistics.
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Mircea Diaconescu
 * @license The MIT License (MIT)
 */
oes.stat = {
  timeSeriesCompressionSteps: 1 // length of array values to be compressed into one value
};
sim.stat = {  // run-time statistics variables
  prevValue: {},
  timeSeries: {},
  resUtil: {}  // resource utilization
};

/**
 * Initialize the ex-post statistics
 */
oes.stat.initialize = function () {
  var aggReturnType = {  // stores the return types of various aggregation functions
    'avg': 'Decimal'
  };
  Object.keys( sim.model.statistics).forEach( function (varName) {
    var statVar = sim.model.statistics[varName],
        initialVal = statVar.initialValue || 0,
        OT="", objIdRefStr="", objectRef=null,
        propDecl="", globVar="";
    statVar.name = varName;
    // is the statistics variable bound to a global variable?
    if (statVar.globalVariable) {
      globVar = statVar.globalVariable;
      if (sim.model.v[globVar] === undefined)
        throw "[Statistics] Global variable "+ globVar +" has not been defined!";
      else if (typeof sim.model.v[globVar] === "object") {
        initialVal = sim.model.v[globVar].initialValue || 0;
      } else initialVal = sim.model.v[globVar];
    } else if (statVar.objectIdRef && statVar.property) {
      // the variable is bound to a specific object
      objIdRefStr = String( statVar.objectIdRef);
      if (statVar.objectType) OT = statVar.objectType;
      else OT = sim.objects[objIdRefStr].constructor.Name;
      objectRef = cLASS[OT].instances[objIdRefStr];
      if (objectRef) {
        statVar.objectRef = objectRef;  // store reference to the object
        // the statistics variable default range is the property range
        if (!statVar.range) {
          if (statVar.aggregationFunction &&
              aggReturnType[statVar.aggregationFunction]) {
            statVar.range = aggReturnType[statVar.aggregationFunction];
          } else {
            propDecl = cLASS[objectRef.constructor.Name].properties[statVar.property];
            statVar.range = propDecl.range;
          }
        }
        initialVal = objectRef[statVar.property];
      } else throw "No object found for objectIdRef"+ objIdRefStr +"in oes.stat.initialize";
    } else if (statVar.gridCellProperty && sim.space.grid) {
      // statistics variable for grid cell property
      if (!statVar.range) {
        if (statVar.aggregationFunction &&
          aggReturnType[statVar.aggregationFunction]) {
          statVar.range = aggReturnType[statVar.aggregationFunction];
        } else {
          propDecl = sim.space.grid[0][0].constructor.properties[statVar.gridCellProperty];
          if (propDecl)  statVar.range = propDecl.range;
        }
      }
    }
    // has the variable's time series to be stored/returned?
    if (statVar.showTimeSeries) {
      if (sim.timeIncrement === undefined){
        sim.stat.timeSeries[varName] = [[],[]];
      } else {
        sim.stat.timeSeries[varName] = [];
      }
    }
    // is variable bound to a time series aggregation?
    statVar.isBoundToTimeSeriesAggregate = (statVar.aggregationFunction &&
        (statVar.objectIdRef && statVar.property || statVar.globalVariable));
    // is variable bound to an aggregate over an ObjectType population?
    statVar.isBoundToPopulationAggregate =
        (!statVar.objectIdRef && statVar.property && OT);
    if (statVar.range) statVar.isIntegerType = cLASS.isIntegerType( statVar.range);
    else if (statVar.globalVariable && typeof sim.model.v[globVar] === "object" &&
             statVar.aggregationFunction && statVar.aggregationFunction !== "avg") {
      statVar.isIntegerType = cLASS.isIntegerType( sim.model.v[globVar].range);
    } else {
      statVar.isIntegerType = false;
    }
    // initialize runtime statistics variables in sim.stat
    if (statVar.isIntegerType) sim.stat[varName] = parseInt( initialVal);
    else sim.stat[varName] = initialVal;
    // store as previous value
    sim.stat.prevValue[varName] = sim.stat[varName];
  });
  // initialize resource utilization statistics
  if (sim.model.activityTypes) {
    sim.model.activityTypes.forEach( function (aT) {
      sim.stat.resUtil[aT] = {};
    });
  }
  // initialize PN statistics
  if (Object.keys( oes.ProcessingNode.instances).length > 0) {
    sim.stat.resUtil["pROCESSINGaCTIVITY"] = {};
  }
};

/**
 * The timeSeries arrays are limited in length for two reasons:
 * - large arrays results in slowing down the simulation
 * - we have limited pixels on the screen to show the statistics graphs
 *
 * Actually, the maximum length is limited to the number of pixels
 * available for the statistics graphs, so one time series value for
 * each one physical pixels. This is achieved by compressing the
 * array, averaging groups of values to one value.
 *
 * @param maxLength
 *    the maximum allowed length of the timeSeries array
 */
oes.stat.prepareTimeSeriesCompression = function (maxLength) {
  maxLength = maxLength || sim.scenario.simulationEndTime; // defaults to "no restriction - all steps"
  oes.stat.timeSeriesCompressionSteps = Math.floor(sim.scenario.simulationEndTime / maxLength);
  if (oes.stat.timeSeriesCompressionSteps < 1) oes.stat.timeSeriesCompressionSteps = 1;
  console.log("Statistics: timeSeriesCompressionSteps="
    + oes.stat.timeSeriesCompressionSteps + " (1 means no compression)");
};
/**
 * Reset the statistics variables. This means that any computed 
 * value is reset to the initial value and all the connection with 
 * object(s) references are recreated.
 */
oes.stat.reset = function () {
  oes.stat.initialize();
};

/**
 * Update the statistic variables at the end of each simulation step.
 */
oes.stat.updateStatistics = function () {
  var i=0, statVar=null,
      variables = Object.keys( sim.model.statistics),
      n = variables.length;
  for (i=0; i<n; i++) {
    statVar = sim.model.statistics[variables[i]];
    // computeOnlyAtEnd statistic variables are ignored at this point
    if (!statVar.computeOnlyAtEnd) oes.stat.updateStatisticsVariable( statVar);
  }
};

/**
 * Update a statistics variable X and assign the result to sim.stat["X"]
 * @param statVar  the statistics variable declaration
 */
oes.stat.updateStatisticsVariable = function (statVar) {
  var varName = statVar.name, valueAtCurrentStep = 0;
  var cellsOnX = 0, cellsOnY = 0, i = 0, j = 0;
  var grid = null;
  var sum = 0, pName = '';
  // expression/function is used to compute the value
  if (typeof statVar.expression === 'function') {
    valueAtCurrentStep = statVar.expression() || 0;
  } else if (statVar.globalVariable) { // value obtained from a global variable
    valueAtCurrentStep = sim.modelVariables[statVar.globalVariable] || 0;
  } else if (statVar.objectRef) { // value obtained from an object property
    valueAtCurrentStep = statVar.objectRef[statVar.property] || 0;
  } else if (statVar.entryNode) { // PN statistics
    valueAtCurrentStep = statVar.entryNode.nmrOfArrivedObjects || 0;
  } else if (statVar.exitNode) { // PN statistics
    valueAtCurrentStep = statVar.exitNode.nmrOfDepartedObjects || 0;
  } else if (statVar.gridCellProperty) {
    grid = sim.space.grid;
    cellsOnX = grid.length;
    cellsOnY = grid[0].length;
    pName = statVar.gridCellProperty;
    for (i = 0; i < cellsOnX; i++) {
      for (j = 0; j < cellsOnY; j++) sum += (grid[i][j])[pName];
    }
    valueAtCurrentStep = sum / (cellsOnX * cellsOnY);
    if (statVar.aggregationFunction) {
      valueAtCurrentStep = oes.stat[statVar.aggregationFunction](
        sim.stat.prevValue[varName], valueAtCurrentStep);
    }
  } else {  // value computed manually in the simulation scenario
    valueAtCurrentStep = sim.stat[varName];
  }
  //TODO: support TimeSeriesAggregate of PopulationAggregate
  if (statVar.isBoundToTimeSeriesAggregate) {
    valueAtCurrentStep = oes.stat[statVar.aggregationFunction](
        sim.stat.prevValue[varName], valueAtCurrentStep);
  } else if (statVar.isBoundToPopulationAggregate) {
    valueAtCurrentStep = oes.stat.computePopulationAggregate(statVar);
  }
  // format integer values
  if (statVar.isIntegerType) sim.stat[varName] = parseInt( valueAtCurrentStep);
  else sim.stat[varName] = valueAtCurrentStep;
  // check if the variable's time series has to be stored/returned
  if (statVar.showTimeSeries) {
    if (sim.timeIncrement) {
      //sim.stat.timeSeries[varName][sim.step] = sim.stat[varName];
      sim.stat.timeSeries[varName].push( sim.stat[varName]);
      if (oes.stat.timeSeriesCompressionSteps > 1
          && sim.step % oes.stat.timeSeriesCompressionSteps === 0) {
        oes.stat.compressTimeSeries( sim.stat.timeSeries[varName]);
      }
    } else {  // next-event time progression
      sim.stat.timeSeries[varName][0][sim.step] = sim.time;
      // TODO: check how we can average steps for time progression case
      sim.stat.timeSeries[varName][1][sim.step] = sim.stat[varName];
      // TODO: check how we can average statistic values for time progression case
    }
  }
  // assign current value to previous value
  sim.stat.prevValue[varName] = sim.stat[varName];
};

/**
 * Compress time series to keep its length in a specified
 * range, avoiding long arrays that slow down the simulation.
 * @param ts
 *    the time series to compress
 */
oes.stat.compressTimeSeries = function (ts) {
  var avgLen = oes.stat.timeSeriesCompressionSteps;
  var i = 0, n = ts.length, avg = 0;
  // compute average value for the latest set, which will be compressed
  for (i = n - avgLen; i < n; i++) avg += ts[i];
  // remove averaged values and append the compressed (average) value
  ts.splice(n-avgLen-1, avgLen, avg /= avgLen);
};

/**
 * Compute a Population Aggregate
 */
oes.stat.computePopulationAggregate = function (statVar) {
  var OT = statVar.objectType,
      objIDs = Object.keys( cLASS[OT].instances),
      n = objIDs.length,
      aggrF = statVar.aggregationFunction,
      aggr=0, i=0;
  switch (aggrF) {
  case "min":
  case "max":
    for (i=0; i < n; i++) {
      aggr = Math[aggrF]( aggr, cLASS[OT].instances[String(id)][statVar.property]);
    }
    break;
  case "sum":
  case "avg":
    for (i=0; i < n; i++) {
      aggr += cLASS[OT].instances[String(id)][statVar.property];
    }
    if (aggrF === "avg") aggr = aggr/n;
    break;
  }
  return aggr;
};
/**
 * Compute the values of the statistic variables which are only required 
 * to be computed at the simulation end. This method has to be called when 
 * the simulation ends.
 */
oes.stat.computeOnlyAtEndStatistics = function () {
  Object.keys( sim.model.statistics).forEach( function (varName) {
    var statVar = sim.model.statistics[varName];
    if (statVar.computeOnlyAtEnd) oes.stat.updateStatisticsVariable( statVar);
  });
};

/**
 * Compute the <code>max</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.max = function (oldValue, newValue) {
  return Math.max( oldValue, newValue);
};

/**
 * Compute the <code>min</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.min = function (oldValue, newValue) {
  return Math.min( oldValue, newValue);
};
/**
 * Compute the <code>sum</code> aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.sum = function (oldValue, newValue) {
  return oldValue + newValue;
};
/**
 * Compute the <code>avg</code> (average, arithmetic mean) aggregation function value.
 * @param oldValue
 * @param newValue
 *
 */
oes.stat.avg = function (oldValue, newValue) {
  if (sim.step >= 1) return (oldValue + (newValue - oldValue) / (sim.step + 1));
  else return oldValue;
};


/**
 * @fileOverview A JavaScript implementation of an Object-Event Simulator defined as
 * a JS object "sim". The simulator is associated with a simulation model (sim.model)
 * and one or more simulation scenarios (sim.scenarios).
 *
 * @copyright Copyright 2016 Gerd Wagner and Mircea Diaconescu, BTU (Germany) + ODU (VA, USA)
 * @author Gerd Wagner
 * @license The MIT License (MIT)
 *
 * Integrity *constraints* that must be satisfied at any simulation step can be defined
 * as Boolean functions in the map "model.constraints" with constraint names being the
 * keys. They are currently checked for the initial state only (in "setupInitialState").
 * In future versions there may be an option that constraints are checked in all
 * simulation steps for catching more model errors.
 */
/*
Improvements/extensions
v1
 - make a sims/basic-tests.html that invokes one or more seeded scenario simulations and checks statistics results
 - Define set/get for scenario.visualize and use the setter for dropping/setting-up the visualization (canvas)
 - Find out what is the meaning of "variable" versus "parameter" in AnyLogic

 - improve oBJECTvIEW by allowing to specify a set of model objects like {"scen":sim.scenario, "mod":sim.mode} such that UI fields
    can be specified in the form of [["scen.simulationEndTime", "mod.timeUnits", "scen.stepDuration", ...]]

 - improve clock-time measuring and support real-time simulation enabled by realtimeFactor set to 1
 - Refactor the simulation step/loop by parametrizing pre-defined events from an extension library (such as "PN Models")
 - Add an "empirical" method to rand
 - Allow defining statistics per ObjectType::property, and not only per object.property
 - New model constraint checks:
   + prevent the use of pre-defined cLASS names ("aRRIVAL", etc.) and predefined property names (oes.predfinedProperties)

 - Implement support for the "recurrence" attribute of entry nodes
 - Allow setting a waiting timeout for the input queues of processing nodes (corresponding
   to AnyLogic's "Enable exit on timeout")
 - Implement support for the "capacity" attribute of processing nodes (by popping/forwarding
   more than one work objects)
 - Allow processing nodes to specify a maximum queue length (limited queue capacity)

 - Add observation UIs for visualizing variables in "monitors"
 - improve the initial state definition UI: 
   + Support setting model variables (provided they have a label)
   + add events
   + allowing adding/dropping objects in the ClassPopulationWidget
   + supporting enumeration attributes in the ClassPopulationWidget

 *** later ***
 - Add exploration model
 - Support using variants of the same model (sim.models)
 - UI for defining ex-post statistics

v2
 - extend mODELcLASS with object pools
 - analyze use of modules
 - concurrent event processing with deferred state changes
 - add agents
 - add participation model
 */

/*******************************************************
 Initializations
 ********************************************************/
sim.ui = sim.ui || {}; // runtime UI components
/*******************************************************
 Add object to simulation objects
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param o  the object to be added
 */
sim.addObject = function (o) {
  if (!(o instanceof oes.Object)) {
    console.log( o.toString() +" is not an oBJECT!");
    return;
  }
  if (!o.id) o.id = sim.idCounter++;
  sim.objects[String(o.id)] = o;
  if (o.name) {
    if (typeof o.name !== "string" ) {
      console.log("oBJECT "+ o.toString() +" has a non-string name"+ o.name);
      return;
    } else sim.namedObjects[o.name] = o;
  }
  return o;
};
sim.addObjects = function (objArr) {
  objArr.forEach( function (o) {sim.addObject(o)});
  return objArr;
};
/*******************************************************
 Remove an object from the set of simulation objects
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param o  the object to be removed
 */
sim.removeObject = function (o) {
  if (!(o instanceof oes.Object)) {
    console.log( JSON.stringify(o) +" is not an OES object!");
    return;
  }
  if (!sim.objects[String(o.id)]) {
    console.log( JSON.stringify(o) +"@"+ sim.time +
        " has not been registered as a simulation object!");
    return;
  }
  delete sim.objects[String(o.id)];
};
sim.removeObjectById = function (id) {
  if (typeof id === "string") id = parseInt(id);
  if (!Number.isInteger( id)) {
    console.log( JSON.stringify(id) +" is not an integer!");
    return;
  }
  if (!sim.objects[String(id)]) {
    console.log( JSON.stringify(id) +" is not an ID of a registered simulation object!");
    return;
  }
  delete sim.objects[String(id)];
};
/*******************************************************
 Schedule an event by adding it to the FEL
 *******************************************************
 * @author Gerd Wagner
 * @method
 * @param e  the event to be scheduled
 */
sim.scheduleEvent = function (e) {
  if (e instanceof oes.Event) sim.FEL.add(e);
  else {
    console.log( e.toString() +" is not an eVENT!");
  }
};
/********************************************************
 * Initialize Model Variables
 ********************************************************/
sim.initializeModelVariables = function (expParamSlots) {
  sim.modelVariables = {};  // a map of global variables (accessible by name)
  // set up the map of model variables
  sim.model.v = sim.model.v || {};
  Object.keys( sim.model.v).forEach( function (varName) {
    if (expParamSlots && expParamSlots[varName]) {
      // assign experiment parameter value
      sim.modelVariables[varName] = expParamSlots[varName];
    } else if (typeof sim.model.v[varName] === "object") {
      sim.modelVariables[varName] = sim.model.v[varName].initialValue;
    } else {
      sim.modelVariables[varName] = sim.model.v[varName];
    }
  });
}
/********************************************************
 * Create Initial Objects and Events
 ********************************************************/
sim.createInitialObjEvt = function () {
  var initState = sim.scenario.initialState,
      initialObjDefs = initState ? initState.objects : null,
      initialEvtDefs = initState ? initState.events : null;
  // clear initial state data structures
  sim.objects = {};  // a map of all objects (accessible by ID)
  sim.namedObjects = {};  // a map of objects accessible by a unique name
  sim.FEL.clear();
  sim.ongoingActivities = {};  // a map of all ongoing activities accessible by ID
  // clear the cLASS populations of object types
  sim.model.objectTypes.forEach( function (objTypeName) {
    cLASS[objTypeName].instances = {};
  });
  // register initial objects
  if (initialObjDefs) {  // a map of object definitions
    Object.keys( initialObjDefs).forEach( function (idStr) {
      var objSlots = util.cloneObject( initialObjDefs[idStr]),
          objTypeName = objSlots.typeName,
          ObjType = cLASS[objTypeName], obj=null;
      // fatal error: object type class not found
      if (!ObjType) throw Error("Missing object type class '" + objTypeName + "'!");
      objSlots.id = parseInt(idStr);
      delete objSlots.typeName;  // remove typeName slot
      try {obj = new ObjType( objSlots);}
      catch (e) {
        console.log( e.constructor.name +": "+ e.message);
      }
      sim.addObject( obj);
    })
  }
  // convert ID references to object references (in a second pass)
  Object.keys( sim.objects).forEach( function (idStr) {
    var obj = sim.objects[idStr],
        props = cLASS[obj.constructor.Name].properties;
    Object.keys( obj).forEach( function (p) {
      if (!props[p]) {
        if (typeof obj[p] !== "function" && !oes.predfinedProperties.includes(p)) {
          console.log("Undeclared prop: "+ p +" for obj "+ idStr);
        }
        return;
      }
      var range = props[p].range, val = obj[p],
          rangeClasses=[];
      if (typeof range === "string" && typeof val !== "object" &&
          (cLASS[range] || range.includes("|"))) {
        if (range.includes("|")) {
          rangeClasses = range.split("|");
          // check referential integrity: val must be in some range class
          if (!rangeClasses.some( function (rc) {
                return cLASS[rc].instances[String(val)];
              })) {
            throw Error("Referential integrity violation: "+ val +" does not reference any of "+
                range +"!");
          }
        } else if (!(sim.objects[String(val)] instanceof cLASS[range])) {  // also allows superclasses
            throw Error("Referential integrity violation: "+ val +" does not reference a "+ range +"!");
        }
        obj[p] = sim.objects[String(val)];
      }
    });
  });
  // schedule initial events
  if (initialEvtDefs) {  // an array of JS object definitions
    initialEvtDefs.forEach( function (evt) {
      var e = util.cloneObject( evt),  // clone event object definition
          evtTypeName = e.typeName,
          EvtType = cLASS[evtTypeName];
      // fatal error: event type class not found
      if (!EvtType) throw Error("Missing class for event type '" + evtTypeName + "'!");
      delete e.typeName;  // remove type slot
      sim.scheduleEvent( new EvtType( e));
    })
  }
  // schedule initial arrival events for the entry nodes of a PN
  Object.keys( oes.EntryNode.instances).forEach( function (en) {
    var occT=0, arrEvt=null;
    // has no recurrence function been defined?
    if (!en.recurrence) {
      // use the default recurrence
      occT = oes.Arrival.defaultRecurrence();
    } else {
      occT = en.recurrence();
    }
    arrEvt = new oes.Arrival({ occTime: occT, entryNode: en});
    sim.scheduleEvent( arrEvt);
  });

  // declare implicit statistics variables for PN entry node statistics
  if (Object.keys( oes.EntryNode.instances).length > 0 &&
      !sim.model.statistics) {
    sim.model.statistics = {};
  }
  Object.keys( oes.EntryNode.instances).forEach( function (nodeIdStr) {
    var entryNode = oes.EntryNode.instances[nodeIdStr],
        varName = entryNode.name + "_arrObj";
    entryNode.nmrOfArrivedObjects = 0;
    sim.model.statistics[varName] = {
      range: "NonNegativeInteger",
      label: "Arrived objects",
      entryNode: entryNode,
      computeOnlyAtEnd: true
    };
  });
  // declare implicit statistics variables for PN exit node statistics
  Object.keys( oes.ExitNode.instances).forEach( function (nodeIdStr) {
    var exitNode = oes.ExitNode.instances[nodeIdStr];
    exitNode.nmrOfDepartedObjects = 0;
    sim.model.statistics[exitNode.name + "_depObj"] = {
      range: "NonNegativeInteger",
      label: "Departed objects",
      exitNode: exitNode,
      computeOnlyAtEnd: true
    };
    exitNode.cumulativeTimeInSystem = 0;
    sim.model.statistics[exitNode.name + "_cumTime"] = {
      range: "Decimal",
      label: "Average time in system",
      exitNode: exitNode,
      computeOnlyAtEnd: true,
      decimalPlaces: 1,
      expression: function () {
        return exitNode.cumulativeTimeInSystem / exitNode.nmrOfDepartedObjects
      }
    }
  });

  // possibly set up additional items
  if (sim.scenario.setupInitialState) sim.scenario.setupInitialState();
};
/*************************************************************
 * Update initial state objects (after modifications via the UI)
 ************************************************************/
sim.updateInitialStateObjects = function () {
  // reset the initial objects map
  sim.scenario.initialState.objects = {};
  // loop over all object types
  sim.model.objectTypes.forEach( function (objTypeName) {
    var objects = cLASS[objTypeName].instances;
    // loop over all instances of this object type
    Object.keys( objects).forEach( function (objIdStr) {
      var obj = objects[objIdStr],
          objRec = util.createRecordFromObject( obj);
      objRec.typeName = objTypeName;
      delete objRec.id;
      sim.scenario.initialState.objects[objIdStr] = objRec;
    });
  });
};
/*************************************************************
 * Initialize the simulator on start up
 * Settings that do not vary across scenarios in an experiment
 ************************************************************/
sim.initializeSimulator = function () {
  var x=0;
  sim.FEL = new oes.EventList();  // the Future Events List (FEL)
  // complete model definition by setting objectTypes and eventTypes if not defined
  if (!sim.model.objectTypes) sim.model.objectTypes = [];
  if (!sim.model.eventTypes) sim.model.eventTypes = [];
  // set timeIncrement for fixed-increment time progression
  if (sim.model.timeIncrement) {
    sim.timeIncrement = sim.model.timeIncrement;
  } else {
    if (sim.model.OnEachTimeStep) sim.timeIncrement = 1;
  }
  if (sim.model.time === "continuous") {
    if (sim.model.timeRoundingDecimalPlaces) {
      sim.timeRoundingFactor = Math.pow( 10, sim.model.timeRoundingDecimalPlaces);
    } else {
      if (sim.timeIncrement) {  // fixed-increment time progression
        // determine rounding factor
        x = sim.timeIncrement - Math.trunc( sim.timeIncrement);
        if (x === 0) sim.timeRoundingFactor = 1;
        else if (x >= 0.1) sim.timeRoundingFactor = 10;
        else if (x >= 0.01) sim.timeRoundingFactor = 100;
        else sim.timeRoundingFactor = 1000;
      }
    }
    // define the minimal time delay until the next moment
    if (sim.model.nextMomentDeltaT) {
      sim.nextMomentDeltaT = sim.model.nextMomentDeltaT;
    } else if (sim.timeRoundingFactor) {
      sim.nextMomentDeltaT = 1 / sim.timeRoundingFactor;
    } else {  // default
      sim.nextMomentDeltaT = 0.000001;
    }
  } else {  // discrete time
    sim.nextMomentDeltaT = 1;
  }
  // set up a default random variate sampling method
  if (sim.scenario.randomSeed) {  // use the Mersenne Twister RNG
    // rand.initialize( sim.scenario.randomSeed);
    rand = new Random( sim.scenario.randomSeed);
  } else {  // use the JS built-in RNG
    // rand.initialize();
    rand = new Random();
  }
};
/*************************************************************
 * Initialize a simulation run
 ************************************************************/
sim.initializeSimulationRun = function (expParamSlots, seed) {
  var logInfo={};
  sim.step = 0;  // simulation loop steps
  sim.time = 0;  // simulation time
  // get ID counter from simulation scenario, or set to default value
  sim.idCounter = sim.scenario.idCounter || 1000;
  // set up a default random variate sampling method
  if (!sim.experiment.replications && sim.scenario.randomSeed) {  // use the Mersenne Twister RNG
    rand = new Random( sim.scenario.randomSeed);
  } else if (seed) {  // experiment-defined replication-specific seed
    rand = new Random( seed);
  } else {  // use the JS built-in RNG
    rand = new Random();
  }
  // set up initial state
  sim.initializeModelVariables( expParamSlots);
  sim.createInitialObjEvt();
  if (sim.model.statistics) {
    // initialize statistics
    oes.stat.initialize();
    // create statistics for initial state
    oes.stat.updateStatistics();
  }
  // get stepDuration from simulation config, or set to default value
  sim.stepDuration = sim.config.stepDuration || 0;
  // log initial state (visualized before in oes.setupFrontEndSimEnv)
  if (sim.config.createLog && typeof sim.logStep === "function") {
    logInfo = sim.createStepLogInfo();
    if (!sim.useWorker) {  // main thread
      if (typeof sim.logStep === "function") sim.logStep( logInfo);
    } else {  // worker thread
      self.postMessage({
        simTime: logInfo.simTime,
        systemStateInfo: logInfo.systemStateInfo,
        evtInfo: logInfo.evtInfo
      });
    }
  }
};
/*******************************************************
 Run a Single Scenario
********************************************************/
sim.runScenario = function (useWorker) {
  if (!useWorker) {  // running in main thread
    sim.useWorker = false;
    sim.initializeSimulationRun();
    sim.runStep();  // loops by self-invocation via setTimeout
  } else {  // running in worker thread
    sim.useWorker = true;
    sim.initializeSimulationRun();
    while (sim.time < sim.scenario.simulationEndTime) {
      sim.runStep();
      // end simulation if no time increment and no more events
      if (!sim.timeIncrement && sim.FEL.isEmpty()) {
        break;
      }
    }
    if (sim.model.statistics) {
      oes.stat.computeOnlyAtEndStatistics();
      self.postMessage({simStat: sim.stat});
    }
  }
};
/*******************************************************
 Browser Scenario Simulation Step
 loops by self-invocation via setTimeout in main thread
********************************************************/
sim.runStep = function (followupEvents) {
  var nextEvents=[], followupEvt=null, i=0, j=0,
      EventClass=null, participantRoles={}, nextExoEvt=null, e=null,
      ActivityEndET=null, AT=null, a=null,
      WorkObject=null, o=null, slots={}, nextNode=null, occT=0,
      nextEvtTime = sim.FEL.getNextOccurrenceTime(),  // 0 if there is no next event
      stepStartTime = (new Date()).getTime(),
      totalStepTime = 0, stepDiffTimeDelay = 0,
      ui = sim.scenario.userInteractions,  // shortcut
      uiViewModel=null, eventTypeName="", logInfo={};
  function advanceSimulationTime () {
    // increment the step counter
    sim.step += 1;
    // advance simulation time
    if (sim.timeIncrement) {  // fixed-increment time progression
      if (nextEvtTime > sim.time && nextEvtTime < sim.time + sim.timeIncrement) {
        sim.time = nextEvtTime;
      } else {
        sim.time += sim.timeIncrement;
        if (sim.model.OnEachTimeStep) sim.model.OnEachTimeStep();
      }
    } else if (nextEvtTime > 0) {  // next-event time progression
      sim.time = nextEvtTime;
    }
    if (sim.model.time === "continuous" && sim.timeRoundingFactor) {
      sim.time = Math.round( sim.time * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
      nextEvtTime = Math.round( nextEvtTime * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
    }
  }
  //-----------------------------------------------------
  if (!sim.useWorker) {
    if (sim.stopRequested) {   // interrupt simulation
      sim.stopRequested = false;
      oes.ui.updateUiOnStop();
      return;
    }
    if (sim.time >= sim.scenario.simulationEndTime)  {  // terminate simulation
      if (sim.model.statistics) oes.stat.computeOnlyAtEndStatistics();
      oes.ui.updateUiOnSimulationEnd();
      return;
    }
  }
  if (followupEvents) {  // runStep was called from user action event handler
    // schedule follow-up events
    for (j=0; j < followupEvents.length; j++) {
      sim.FEL.add( followupEvents[j]);
    }
    // clear followUpEvents list
    followupEvents = [];
  } else {  // normal invocation of runStep
    followupEvents = [];
    advanceSimulationTime();
    // update the sim-control UI via the fields' data binding to UI output elements
    if (!sim.useWorker) {
      sim.ui["sim"].dataBinding["step"].value = sim.step;
      sim.ui["sim"].dataBinding["time"].value = sim.time;
    }
    // extract and process next events
    if (sim.time === nextEvtTime) {
      nextEvents = sim.FEL.removeNextEvents();
      if (nextEvents.length > 1) nextEvents.sort( oes.Event.rank);  // priority order
      for (i=0; i < nextEvents.length; i++) {
        e = nextEvents[i];
        eventTypeName = e.constructor.Name;
        // retrieve event class
        EventClass = cLASS[eventTypeName];
        // test if EventClass represents an exogenous event type
        if (EventClass.recurrence) {
          // create and schedule next exogenous event
          if (e.createNextEvent) {  // new syntax
            sim.FEL.add( e.createNextEvent());
          } else if (EventClass.createNextEvent) {  // old syntax (class-level method)
            sim.FEL.add( EventClass.createNextEvent( e));
          } else {
            //TODO: filter participantRoles in a pre-processing step in initModel
            //let participantRoles = EventClass.properties;  TODO: for ES6 versio
            participantRoles = EventClass.properties;
            nextExoEvt = new EventClass();
            nextExoEvt.occTime = e.occTime + EventClass.recurrence();
            // copy event participants
            Object.keys( participantRoles).forEach( function (pR) {
              nextExoEvt[pR] = e[pR];
            });
            sim.FEL.add( nextExoEvt);
          }
        }
        switch (eventTypeName) {
        case "aCTIVITYsTART":
        case "pROCESSINGaCTIVITYsTART":
          slots = {};
          if (eventTypeName === "aCTIVITYsTART") {
            AT = cLASS[e.activityType];
            ActivityEndET = oes.ActivityEnd;
            if (e.duration) slots.duration = e.duration;
            else if (AT.fixedDuration) slots.duration = AT.fixedDuration;
            else if (AT.randomDuration) slots.duration = AT.randomDuration();
          } else {  // if e is a pROCESSINGaCTIVITYsTART event
            AT = oes.ProcessingActivity;
            ActivityEndET = oes.ProcessingActivityEnd;
            if (e.duration) slots.duration = e.duration;
            else if (e.actor.fixedDuration) slots.duration = e.actor.fixedDuration;
            else if (e.actor.randomDuration) slots.duration = e.actor.randomDuration();
            else slots.duration = oes.ProcessingActivity.defaultDuration();
            // make actor object a resource
            e.resources["actor"] = e.actor;
          }
          Object.keys( e.resources).forEach( function (resRole) {
            var resObj = e.resources[resRole];
            // copy resource def. slots as ref. prop. slots
            if (!slots[resRole]) slots[resRole] = resObj;
            // set activity state for resource object
            if (!resObj.activityState) resObj.activityState = {};
            resObj.activityState[e.activityType] = true;
          });
          slots.id = sim.idCounter++;  // activities need an ID
          slots.startTime = e.occTime;
          // create new activity
          a = new AT( slots);
          a.resources = e.resources;  // assign resources map
          sim.ongoingActivities[String( a.id)] = a;
          // if there is a onActivityStart procedure, execute it
          if (eventTypeName === "aCTIVITYsTART") {
            if (a.onActivityStart) followupEvents = a.onActivityStart();
          } else {  // if e is a pROCESSINGaCTIVITYsTART event
            if (e.actor.onActivityStart) followupEvents = e.actor.onActivityStart();
          }
          if (a.duration) {  // schedule activity end event
            followupEvt = new ActivityEndET({
              occTime: e.occTime + a.duration,
              activityType: AT.Name,
              activityIdRef: a.id
            });
            if (e.actor) followupEvt.actor = e.actor;
            followupEvents.push( followupEvt);
          }
          break;
        case "aCTIVITYeND":
        case "pROCESSINGaCTIVITYeND":
          // retrieve activity
          a = sim.ongoingActivities[String( e.activityIdRef)];
          // if there is an onActivityEnd procedure, execute it
          if (eventTypeName === "aCTIVITYeND") {
            if (a.onActivityEnd) followupEvents = a.onActivityEnd();
          } else {  // if e is a pROCESSINGaCTIVITYeND event
            if (e.actor.onActivityEnd) followupEvents = e.actor.onActivityEnd();
          }
          // set occTime and duration if there was no pre-set duration
          if (!a.duration) {
            a.occTime = e.occTime;
            a.duration = a.occTime - a.startTime;
          }
          // compute resource utilization per resource role
          // and update the activity state of resource objects
          Object.keys( a.resources).forEach( function (resRole) {
            var objIdStr = String(a[resRole].id),
                resUtilMap = sim.stat.resUtil[e.activityType];
            if (resUtilMap[objIdStr] === undefined) resUtilMap[objIdStr] = 0;
            resUtilMap[objIdStr] += a.duration;
            delete a[resRole].activityState[e.activityType];
          });
          // drop activity from list of ongoing activities
          delete sim.ongoingActivities[String( e.activityIdRef)];
          if (eventTypeName === "pROCESSINGaCTIVITYeND") {
            // the successor node may be dynamically assigned by a.onActivityEnd()
            nextNode = e.actor.successorNode || a.successorNode;
            // pop object from the input queue
            o = e.actor.inputQueue.shift();
            // is the next node a processing node?
            if (nextNode.constructor.Name === "pROCESSINGnODE") {
              // push object to the input queue of the next node
              nextNode.inputQueue.push( o);
              // is the next processing node not busy?
              if (nextNode.inputQueue.length === 1) {
                followupEvents.push( new oes.ProcessingActivityStart({
                  occTime: e.occTime + sim.nextMomentDeltaT,
                  activityType: "pROCESSINGaCTIVITY",
                  actor: nextNode,
                  resources: a.resources || {}
                }));
              }
            } else {  // the next node is an exit node
              followupEvents.push( new oes.Departure({
                occTime: e.occTime + sim.nextMomentDeltaT,
                exitNode: nextNode,
                workObject: o
              }));
            }
            // are there more items in the input queue?
            if (e.actor.inputQueue.length > 0) {
              followupEvents.push( new oes.ProcessingActivityStart({
                occTime: e.occTime + sim.nextMomentDeltaT,
                activityType: "pROCESSINGaCTIVITY",
                actor: e.actor,
                resources: a.resources || {}
              }));
            }
          }
          break;
        case "aRRIVAL":  // at an entry node
          if (e.entryNode.outputType) {
            WorkObject = cLASS[e.entryNode.outputType];
          } else {  // default
            WorkObject = oes.WorkObject;
          }
          // update statistics
          e.entryNode.nmrOfArrivedObjects++;
          // create newly arrived work object
          o = new WorkObject({arrivalTime: e.occTime});
          sim.addObject( o);
          // invoke onArrival event rule method
          if (e.entryNode.onArrival) followupEvents = e.entryNode.onArrival();
          if (e.entryNode.successorNode) {
            // push newly arrived object to the inputQueue of the next node
            e.entryNode.successorNode.inputQueue.push( o);
            // is the follow-up node not busy?
            if (e.entryNode.successorNode.inputQueue.length === 1) {
              followupEvents.push( new oes.ProcessingActivityStart({
                occTime: e.occTime + sim.nextMomentDeltaT,
                activityType: "pROCESSINGaCTIVITY",
                actor: e.entryNode.successorNode,
                resources: e.entryNode.resources || {}
              }));
            }
          }
          // has an arrival recurrence function been defined for the entry node?
          if (e.entryNode.arrivalRecurrence) {
            occT = e.occTime + e.entryNode.arrivalRecurrence();
          } else {  // use the default recurrence
            occT = e.occTime + oes.Arrival.defaultRecurrence();
          }
          // schedule next aRRIVAL event
          if (!e.entryNode.maxNmrOfArrivals ||
              e.entryNode.nmrOfArrivedObjects < e.entryNode.maxNmrOfArrivals) {
            sim.scheduleEvent( new oes.Arrival({
              occTime: occT, entryNode: e.entryNode}));
          }
          break;
        case "dEPARTURE":
          // update statistics
          e.exitNode.nmrOfDepartedObjects++;
          e.exitNode.cumulativeTimeInSystem += e.occTime - e.workObject.arrivalTime;
          // invoke onDeparture event rule method
          if (e.exitNode.onDeparture) followupEvents = e.exitNode.onDeparture();
          // remove object from simulation
          sim.removeObject( e.workObject);
          break;
        default:  //***** all types of user-defined events *****
          // check if a user interaction has been triggered
          if (sim.config.userInteractive && ui && ui[eventTypeName]) {
            // check also the triggering event condition, if defined
            if (!ui[eventTypeName].trigEvtCondition || ui[eventTypeName].trigEvtCondition(e)) {
              // make sure that the user interaction triggering event is last in nextEvents list
              if (i === nextEvents.length - 1) {
                sim.currentEvents[eventTypeName] = e;
                uiViewModel = ui[eventTypeName];
                Object.keys( uiViewModel.outputFields).forEach( function (outFldN) {
                  var fldEl = uiViewModel.dataBinding[outFldN],
                      val = uiViewModel.outputFields[outFldN].fieldValue;
                  if (typeof val === "function") fldEl.value = val();
                  else fldEl.value = val || "";
                });
                uiViewModel.domElem.style.display = "block";
                return;  // interrupt simulator & transfer control to UI
              } else {
                util.swapArrayElements( nextEvents, i, length-1);
              }
            }
          }
          followupEvents = e.onEvent();
        }  //***end of switch***
        // render event appearances if defined
        if (sim.config.visualize && sim.ui.animations && sim.ui.animations[eventTypeName]) {
          sim.ui.animations[eventTypeName].play();
        }
        // schedule follow-up events
        for (j=0; j < followupEvents.length; j++) {
          sim.FEL.add( followupEvents[j]);
        }
        // clear followUpEvents list
        followupEvents = [];
      }
    }
  }
  // update statistics
  if (sim.model.statistics) oes.stat.updateStatistics();
  // create simulation log
  if (sim.config.createLog) {
    logInfo = sim.createStepLogInfo();
    if (!sim.useWorker) {  // main thread
      if (typeof sim.logStep === "function") sim.logStep( logInfo);
    } else {  // worker thread
      self.postMessage({
        simTime: logInfo.simTime,
        systemStateInfo: logInfo.systemStateInfo,
        evtInfo: logInfo.evtInfo
      });
    }
  }
  // update state visualization (NOT in worker mode)
  if (sim.config.visualize) oes.ui.visualizeStep();
  // compute the time needed for executing this step
  totalStepTime = (new Date()).getTime() - stepStartTime;
  // check if we need some delay, because of the stepDuration parameter
  if (sim.stepDuration > totalStepTime) {
    stepDiffTimeDelay = sim.stepDuration - totalStepTime
  } else {
    /*if (sim.stepDuration > 0) {
     console.log("Duration of step "+ String( sim.step-1) +": "+ totalStepTime);
     }*/
    stepDiffTimeDelay = 0;
  }
  if (!sim.useWorker) {  // main thread
    // end simulation if no time increment and no more events
    if (!sim.timeIncrement && sim.FEL.isEmpty()) {
      if (sim.model.statistics) oes.stat.computeOnlyAtEndStatistics();
      oes.ui.updateUiOnSimulationEnd();
      return;
    } else {
      // continue simulation loop
      // in the browser, use setTimeout to prevent script blocking
      setTimeout( sim.runStep, stepDiffTimeDelay);
    }
  }
};
/*******************************************************
 Run an Experiment (in a JS worker)
 ********************************************************/
sim.runExperiment = function () {
  var exp = sim.experiment, cp=[], valueSets=[], i=0, j=0, k=0, M=0,
      N = exp.parameters.length, increm=0, x=0, expPar={},
      valueCombination=[], expParamSlots={};
  for (i=0; i < N; i++) {
    expPar = exp.parameters[i];
    if (!expPar.values) {
      // create value set
      expPar.values = [];
      increm = expPar.stepSize || 1;
      for (x = expPar.startValue; x <= expPar.endValue; x += increm) {
        expPar.values.push( x);
      }
    }
    valueSets.push( expPar.values);
  }
  cp = util.cartesianProduct( valueSets);
  // loop over all combinations of experiment parameter values
  M = cp.length;  // size of cartesian product
  for (i=0; i < M; i++) {
    valueCombination = cp[i];  // a JS array
    // initialize the scenario record
    exp.scenarios[i] = {stat:{}};
    exp.scenarios[i].parameterValues = valueCombination;
    // initialize scenario statistics
    Object.keys( sim.model.statistics).forEach( function (varName) {
      if (sim.model.statistics[varName].label) {  // output statistics
        exp.scenarios[i].stat[varName] = 0;
      }
    });
    // create experiment parameter slots for assigning corresponding model variables
    for (j=0; j < N; j++) {
      expParamSlots[exp.parameters[j].name] = valueCombination[j];
    }
    // run experiment scenario replications
    for (k=0; k < exp.replications; k++) {
      if (exp.seeds) {
        sim.initializeSimulationRun( expParamSlots, exp.seeds[k]);
      } else {
        sim.initializeSimulationRun( expParamSlots);
      }
      while (sim.time < sim.scenario.simulationEndTime) {
        sim.runExperimentScenarioStep();
        // end simulation if no time increment and no more events
        if (!sim.timeIncrement && sim.FEL.isEmpty()) {
          break;
        }
      }
      oes.stat.computeOnlyAtEndStatistics();
      // aggregate scenario run statistics from sim.stat to sim.experiment.scenarios[i].stat
      Object.keys( sim.model.statistics).forEach( function (varName) {
        if (sim.model.statistics[varName].label) {  // output statistics
          exp.scenarios[i].stat[varName] += sim.stat[varName];
        }
      });
    }
    // compute average values
    Object.keys( sim.model.statistics).forEach( function (varName) {
      if (sim.model.statistics[varName].label) {  // output statistics
        exp.scenarios[i].stat[varName] /= exp.replications;
      }
    });
    // send scenario statistics to main thread
    self.postMessage({
      expScenNo: i,
      expScenParamValues: exp.scenarios[i].parameterValues,
      expScenStat: exp.scenarios[i].stat
    });
  }
};
/*******************************************************
 Experiment Scenario Simulation Step
 ********************************************************/
sim.runExperimentScenarioStep = function () {
  var nextEvents=[], followupEvt=null, i=0, j=0,
      EventClass=null, participantRoles={}, nextExoEvt=null, e=null,
      ActivityEndET=null, AT=null, a=null,
      WorkObject=null, o=null, slots={}, nextNode=null, occT=0,
      nextEvtTime = sim.FEL.getNextOccurrenceTime(),  // 0 if there is no next event
      eventTypeName="";
  function advanceSimulationTime () {
    // increment the step counter
    sim.step += 1;
    // advance simulation time
    if (sim.timeIncrement) {  // fixed-increment time progression
      // fixed-increment time progression simulations may also have events
      if (nextEvtTime > sim.time && nextEvtTime < sim.time + sim.timeIncrement) {
        sim.time = nextEvtTime;  // an event occurring before the next incremented time
      } else {
        sim.time += sim.timeIncrement;
        if (sim.model.OnEachTimeStep) sim.model.OnEachTimeStep();
      }
    } else if (nextEvtTime > 0) {  // next-event time progression
      sim.time = nextEvtTime;
    }
    if (sim.model.time === "continuous" && sim.timeRoundingFactor) {
      sim.time = Math.round( sim.time * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
      nextEvtTime = Math.round( nextEvtTime * sim.timeRoundingFactor) /
          sim.timeRoundingFactor;
    }
  }
  //-----------------------------------------------------
  followupEvents = [];
  advanceSimulationTime();
  // extract and process next events
  if (sim.time === nextEvtTime) {
    nextEvents = sim.FEL.removeNextEvents();
    for (i=0; i < nextEvents.length; i++) {
      e = nextEvents[i];
      eventTypeName = e.constructor.Name;
      // retrieve event class
      EventClass = cLASS[eventTypeName];
      // test if EventClass represents an exogenous event type
      if (EventClass.recurrence) {
        // create and schedule next exogenous event
        if (e.createNextEvent) {  // new syntax
          sim.FEL.add( e.createNextEvent());
        } else if (EventClass.createNextEvent) {  // old syntax (class-level method)
          sim.FEL.add( EventClass.createNextEvent( e));
        } else {
          //TODO: filter participantRoles in a pre-processing step in initModel
          //let participantRoles = EventClass.properties;  TODO: for ES6 versio
          participantRoles = EventClass.properties;
          nextExoEvt = new EventClass();
          nextExoEvt.occTime = e.occTime + EventClass.recurrence();
          // copy event participants
          Object.keys( participantRoles).forEach( function (pR) {
            nextExoEvt[pR] = e[pR];
          });
          sim.FEL.add( nextExoEvt);
        }
      }
      switch (eventTypeName) {
        case "aCTIVITYsTART":
        case "pROCESSINGaCTIVITYsTART":
          slots = {};
          if (eventTypeName === "aCTIVITYsTART") {
            AT = cLASS[e.activityType];
            ActivityEndET = oes.ActivityEnd;
            if (e.duration) slots.duration = e.duration;
            else if (AT.fixedDuration) slots.duration = AT.fixedDuration;
            else if (AT.randomDuration) slots.duration = AT.randomDuration();
          } else {  // if e is a pROCESSINGaCTIVITYsTART event
            AT = oes.ProcessingActivity;
            ActivityEndET = oes.ProcessingActivityEnd;
            if (e.duration) slots.duration = e.duration;
            else if (e.actor.fixedDuration) slots.duration = e.actor.fixedDuration;
            else if (e.actor.randomDuration) slots.duration = e.actor.randomDuration();
            else slots.duration = oes.ProcessingActivity.defaultDuration();
            // make actor object a resource
            e.resources["actor"] = e.actor;
          }
          Object.keys( e.resources).forEach( function (resRole) {
            var resObj = e.resources[resRole];
            // copy resource def. slots as ref. prop. slots
            if (!slots[resRole]) slots[resRole] = resObj;
            // set activity state for resource object
            if (!resObj.activityState) resObj.activityState = {};
            resObj.activityState[e.activityType] = true;
          });
          slots.id = sim.idCounter++;  // activities need an ID
          slots.startTime = e.occTime;
          // create new activity
          a = new AT( slots);
          a.resources = e.resources;  // assign resources map
          sim.ongoingActivities[String( a.id)] = a;
          // if there is a onActivityStart procedure, execute it
          if (eventTypeName === "aCTIVITYsTART") {
            if (a.onActivityStart) followupEvents = a.onActivityStart();
          } else {  // if e is a pROCESSINGaCTIVITYsTART event
            if (e.actor.onActivityStart) followupEvents = e.actor.onActivityStart();
          }
          if (a.duration) {  // schedule activity end event
            followupEvt = new ActivityEndET({
              occTime: e.occTime + a.duration,
              activityType: AT.Name,
              activityIdRef: a.id
            });
            if (e.actor) followupEvt.actor = e.actor;
            followupEvents.push( followupEvt);
          }
          break;
        case "aCTIVITYeND":
        case "pROCESSINGaCTIVITYeND":
          // retrieve activity
          a = sim.ongoingActivities[String( e.activityIdRef)];
          // if there is an onActivityEnd procedure, execute it
          if (eventTypeName === "aCTIVITYeND") {
            if (a.onActivityEnd) followupEvents = a.onActivityEnd();
          } else {  // if e is a pROCESSINGaCTIVITYeND event
            if (e.actor.onActivityEnd) followupEvents = e.actor.onActivityEnd();
          }
          // set occTime and duration if there was no pre-set duration
          if (!a.duration) {
            a.occTime = e.occTime;
            a.duration = a.occTime - a.startTime;
          }
          // compute resource utilization per resource role
          // and update the activity state of resource objects
          Object.keys( a.resources).forEach( function (resRole) {
            var objIdStr = String(a[resRole].id),
                resUtilMap = sim.stat.resUtil[e.activityType];
            if (resUtilMap[objIdStr] === undefined) resUtilMap[objIdStr] = 0;
            resUtilMap[objIdStr] += a.duration;
            delete a[resRole].activityState[e.activityType];
          });
          // drop activity from list of ongoing activities
          delete sim.ongoingActivities[String( e.activityIdRef)];
          if (eventTypeName === "pROCESSINGaCTIVITYeND") {
            // the successor node may be dynamically assigned by a.onActivityEnd()
            nextNode = e.actor.successorNode || a.successorNode;
            // pop object from the input queue
            o = e.actor.inputQueue.shift();
            // is the next node a processing node?
            if (nextNode.constructor.Name === "pROCESSINGnODE") {
              // push object to the input queue of the next node
              nextNode.inputQueue.push( o);
              // is the next processing node not busy?
              if (nextNode.inputQueue.length === 1) {
                followupEvents.push( new oes.ProcessingActivityStart({
                  occTime: e.occTime + sim.nextMomentDeltaT,
                  activityType: "pROCESSINGaCTIVITY",
                  actor: nextNode,
                  resources: a.resources || {}
                }));
              }
            } else {  // the next node is an exit node
              followupEvents.push( new oes.Departure({
                occTime: e.occTime + sim.nextMomentDeltaT,
                exitNode: nextNode,
                workObject: o
              }));
            }
            // are there more items in the input queue?
            if (e.actor.inputQueue.length > 0) {
              followupEvents.push( new oes.ProcessingActivityStart({
                occTime: e.occTime + sim.nextMomentDeltaT,
                activityType: "pROCESSINGaCTIVITY",
                actor: e.actor,
                resources: a.resources || {}
              }));
            }
          }
          break;
        case "aRRIVAL":  // at an entry node
          if (e.entryNode.outputType) {
            WorkObject = cLASS[e.entryNode.outputType];
          } else {  // default
            WorkObject = oes.WorkObject;
          }
          // update statistics
          e.entryNode.nmrOfArrivedObjects++;
          // create newly arrived work object
          o = new WorkObject({arrivalTime: e.occTime});
          sim.addObject( o);
          // invoke onArrival event rule method
          if (e.entryNode.onArrival) followupEvents = e.entryNode.onArrival();
          if (e.entryNode.successorNode) {
            // push newly arrived object to the inputQueue of the next node
            e.entryNode.successorNode.inputQueue.push( o);
            // is the follow-up node not busy?
            if (e.entryNode.successorNode.inputQueue.length === 1) {
              followupEvents.push( new oes.ProcessingActivityStart({
                occTime: e.occTime + sim.nextMomentDeltaT,
                activityType: "pROCESSINGaCTIVITY",
                actor: e.entryNode.successorNode,
                resources: e.entryNode.resources || {}
              }));
            }
          }
          // has an arrival recurrence function been defined for the entry node?
          if (e.entryNode.arrivalRecurrence) {
            occT = e.occTime + e.entryNode.arrivalRecurrence();
          } else {  // use the default recurrence
            occT = e.occTime + oes.Arrival.defaultRecurrence();
          }
          // schedule next aRRIVAL event
          if (!e.entryNode.maxNmrOfArrivals ||
              e.entryNode.nmrOfArrivedObjects < e.entryNode.maxNmrOfArrivals) {
            sim.scheduleEvent( new oes.Arrival({
              occTime: occT, entryNode: e.entryNode}));
          }
          break;
        case "dEPARTURE":
          // update statistics
          e.exitNode.nmrOfDepartedObjects++;
          e.exitNode.cumulativeTimeInSystem += e.occTime - e.workObject.arrivalTime;
          // invoke onDeparture event rule method
          if (e.exitNode.onDeparture) followupEvents = e.exitNode.onDeparture();
          // remove object from simulation
          sim.removeObject( e.workObject);
          break;
        default:  //***** all types of user-defined events *****
          followupEvents = e.onEvent();
      }  //***end of switch***
      // schedule follow-up events
      for (j=0; j < followupEvents.length; j++) {
        sim.FEL.add( followupEvents[j]);
      }
      // clear followUpEvents list
      followupEvents = [];
    }
  }
  // update statistics
  if (sim.model.statistics) oes.stat.updateStatistics();
};
/*******************************************************
 Create step log info
 ********************************************************/
sim.createStepLogInfo = function () {
  var simTime = sim.model.time === "continuous" && sim.timeRoundingFactor ?
      Math.round( sim.time * sim.timeRoundingFactor) / sim.timeRoundingFactor :
      sim.time;
  var systemStateInfo = Object.keys( sim.modelVariables).reduce( function (serialization, varName, i) {
    var varDecl = sim.model.v[varName], slotSerialization="";
    if (varDecl.shortLabel) {
      slotSerialization = varDecl.shortLabel +": "+ sim.modelVariables[varName];
      return i>0 ? serialization +", "+ slotSerialization : slotSerialization;
    } else return serialization;
  }, "");
  if (systemStateInfo && Object.keys( sim.objects).length > 0) systemStateInfo += ", ";
  systemStateInfo += Object.keys( sim.objects).reduce( function (serialization, objIdStr, i) {
    var o = sim.objects[objIdStr];
    if (o.shortLabel || o.constructor.shortLabel) {
      return i>0 ? serialization +", "+ o.toLogString() : o.toLogString();
    } else return serialization;
  }, "");
  return {simTime: String(simTime), systemStateInfo: systemStateInfo, evtInfo: sim.FEL.toString()}
}
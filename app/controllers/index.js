$.index.open();
/**
 * Handling itemClick event on ListView
 */
function listItemHandler (e) {
    var item = $.listSection.getItemAt(e.itemIndex);
    //Ti.API.info ('ListItem event data '+ JSON.stringify(e));
    
    //handling toggling of bookMark view
    if (e.bindId === 'bookMark') {
    	Ti.API.info ('ListItem data '+ JSON.stringify(item));
    	//modifyng the data
    	item.data.isFavorite = !item.data.isFavorite;
    	//recreating the item's data and updating the ListItem with the new item
    	$.listSection.updateItemAt(e.itemIndex, makeItem (item.data));
    }
    
}
function buttonEventHandler (e) {
	Ti.API.info ('ListItem button event data '+ JSON.stringify(e));
}
/**
 * Creating an array of dummy data
 * @param  {int} num  amount of items for array
 * @return {[type]}     [description]
 */
function createDummyDataArray (num) {
	var array = [];
	var data ;
	for (var i = 0; i < num; i++) {
		//creating a dummy data item
		data = makeDummyData();
		array.push (data);

	}
	return array;
}
/**
 * Dummy data entries
 * @return {object}     a randomized data object
 */
function makeDummyData () {
	var titleArray = ['A great landscape', 'Insightful', 'Wish to be there'];
	var bodyArray = ['Desolation is a sunny breeze.', 'Why does the captain grow?', 'The shore sails like a cold sail.'];
	var imageArray = ['/images/landscape.jpg','/images/landscape2.jpg','/images/landscape3.jpg'];
	var avatarArray = ['/images/colbert.jpg','/images/oreilly.jpg'];
	return {
		title : titleArray[Math.floor(Math.random()*titleArray.length)],
		body : bodyArray[Math.floor(Math.random()*bodyArray.length)],
		image : imageArray[Math.floor(Math.random()*imageArray.length)],
		avatar : avatarArray[Math.floor(Math.random()*avatarArray.length)],
		isFavorite : Math.random() >= 0.5
	};


}
/**
 *  Creates a formated ListDataItem obect
 * @param  {object} obj Raw data
 * @return {ListDataItem}     A listDataItem object
 */
function makeItem (obj) {

	return {
		data: obj,
		title : {text : obj.title},
		bodyText : {text : obj.body},
		avatar : {image : obj.avatar},
		pic : {image : obj.image},
		bookMark : {backgroundImage : obj.isFavorite ? '/images/star_selected.png':'/images/star_unselected.png'}
	};

}
/**
 * Setting up the ListView data
 */
function setListItems () {
	var dataArray = createDummyDataArray (50);
	var arrayCount = dataArray.length;
	var listItems = [];
	for (var i = 0; i < arrayCount; i++) {
		listItems.push (makeItem(dataArray[i]));
	}
	$.listSection.setItems (listItems);
}


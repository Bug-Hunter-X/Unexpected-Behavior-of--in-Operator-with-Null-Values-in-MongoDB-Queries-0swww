```javascript
// Solution: Explicitly handle null values using $or operator
db.collection('myCollection').find({ $or: [{ field: { $in: [1, 2] } }, { field: null }] }); 
```
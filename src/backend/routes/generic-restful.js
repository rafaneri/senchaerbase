/**
 * Created by rafaelneri on 13/03/15.
 */
var express = require('express');
var router = express.Router();

module.exports = function(modelSchema, urlName){
    router.route('/' + urlName)
        .get(function(req, res, next){
            modelSchema.find(function(err, entities){
                if (err) return next(err);
                res.json(entities);
            });
        })
        .post(function(req, res, next){
            modelSchema.create(req.body, function(err, entity){
                if (err) return next(err);
                res.statusCode = 201;
                res.json(entity);
            });
        });

    router.route('/' + urlName + '/:id')
        .put(function(req, res, next){
            modelSchema.findByIdAndUpdate(req.params.id, req.body, function(err, entity){
                if (err) return next(err);
                res.json(entity);
            });
        })
        .get(function(req, res, next){
            modelSchema.findById(req.params.id, function(err, entity){
                if (err) return next(err);
                res.json(entity);
            });
        })
        .delete(function(req, res, next){
            modelSchema.findByIdAndRemove(req.params.id, req.body, function(err, entity){
                if (err) return next(err);
                entity.remove(); // workarround for trigger the post('remove') hook
                res.json(entity);
            });
        });
    return router;
};
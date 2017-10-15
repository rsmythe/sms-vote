"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VoteSource_1 = require("../models/VoteSource");
const utils = require("../utils");
exports.voteSMS = (request, response) => {
    response.header('Content-Type', 'text/xml');
    const body = request.param('Body').trim();
    // the number the vote it being sent to (this should match an Event)
    const to = request.param('To').slice(1);
    // the voter, use this to keep people from voting more than once
    const from = request.param('From');
    VoteSource_1.default.find({ PhoneNumber: to })
        .limit(1)
        .exec((err, votes) => {
        const vote = votes[0];
        if (err) {
            console.log(err);
            // silently fail for the user
            response.send('<Response></Response>');
        }
        else if (vote.Enabled === false) {
            response.send('<Response><Sms>Voting is now closed.</Sms></Response>');
        }
        else if (!utils.testint(body)) {
            console.log('Bad vote: ' + vote.Name + ', ' + from + ', ' + body);
            response.send('<Response><Sms>Sorry, invalid vote. Please text a number between 1 and ' + vote.Choices.length + '</Sms></Response>');
        }
        else if (utils.testint(body) && (parseInt(body) <= 0 || parseInt(body) > vote.Choices.length)) {
            console.log('Bad vote: ' + vote.Name + ', ' + from + ', ' + body + ', ' + ('[1-' + vote.Choices.length + ']'));
            response.send('<Response><Sms>Sorry, invalid vote. Please text a number between 1 and ' + vote.Choices.length + '</Sms></Response>');
        }
        else if (vote.hasVoted(from)) {
            console.log('Denying vote: ' + vote.Name + ', ' + from);
            response.send('<Response><Sms>Sorry, you are only allowed to vote once.</Sms></Response>');
        }
        else {
            const choice = parseInt(body);
            vote.Choices[choice].Numbers.push(from);
            vote.save((err) => {
                if (err) {
                    response.send('<Response><Sms>We encountered an error saving your vote. Try again?</Sms></Response>');
                }
                else {
                    console.log('Accepting vote: ' + vote.Name + ', ' + from);
                    response.send('<Response><Sms>Thanks for your vote for ' + vote.Name + '. Powered by Twilio.</Sms></Response>');
                }
            });
        }
    });
};
exports.saveVote = (req, res, next) => {
    const dto = req.body;
    if (!dto._id) {
        const vote = new VoteSource_1.default(dto);
        vote.save((err, product) => {
            if (err) {
                return next(err);
            }
            const result = {
                Success: true,
                Id: product._id
            };
            res.json(result);
        });
    }
    else {
        VoteSource_1.default.findByIdAndUpdate(dto._id, { Name: dto.Name, PhoneNumber: dto.PhoneNumber, Enabled: dto.Enabled }, { upsert: true }, (err, product) => {
            if (err) {
                return next(err);
            }
            const result = {
                Success: true,
                Id: product._id
            };
            res.json(result);
        });
    }
};
exports.deleteVote = (req, res, next) => {
    VoteSource_1.default.findByIdAndRemove(req.params.voteId, (err, res) => {
        if (err) {
            return next(err);
        }
        const result = {
            Success: true
        };
    });
};
exports.getVotes = (req, res, next) => {
    VoteSource_1.default.find((err, votes) => {
        if (err) {
            return next(err);
        }
        res.json(votes);
    });
};
//# sourceMappingURL=vote.js.map
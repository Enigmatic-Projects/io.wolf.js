//#region Request Voids
import IOClient, { IIOClientOptions } from './IOClient';
import * as Achievement from './Requests/Achievement';
import * as Blocked from './Requests/Blocked';
import * as Charm from './Requests/Charm';
import * as Contact from './Requests/Contact';
import * as Credit from './Requests/Credit';
import * as Discover from './Requests/Discover';
import * as Event from './Requests/Event';
import * as Group from './Requests/Group';
import * as GroupAudio from './Requests/GroupAudio';
import * as GroupMember from './Requests/GroupMember';
import * as Message from './Requests/Message';
import * as Metadata from './Requests/Metadata';
import * as Search from './Requests/Search';
import * as Security from './Requests/Security';
import * as Stage from './Requests/Stage';
import * as Subscriber from './Requests/Subscriber';
import * as Tip from './Requests/Tip';

const Requests = {
    ...Achievement,
    ...Blocked,
    ...Charm,
    ...Contact,
    ...Credit,
    ...Discover,
    ...Event,
    ...Group,
    ...GroupAudio,
    ...GroupMember,
    ...Message,
    ...Metadata,
    ...Search,
    ...Security,
    ...Stage,
    ...Subscriber,
    ...Tip
}

export {
    IOClient,
    IIOClientOptions,
    Requests
}

module.exports = {
    IOClient,
    Requests
};
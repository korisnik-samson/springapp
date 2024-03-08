package org.project.chatapp.components.user.strategies;

import org.privatechat.user.models.User;

public interface IUserRetrievalStrategy<T> {
  public User getUser(T userIdentifier);
}
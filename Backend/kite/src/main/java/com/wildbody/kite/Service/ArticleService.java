package com.wildbody.kite.Service;

import com.wildbody.kite.DTO.Article;

import java.util.List;

public interface ArticleService {
	public int initArticle(Article article);

	public int articleInsert(Article article);

	public int articleUpdate(Article article);

	public int articleDelete(String id);

	public List<Article> articleList();

	public Article oneArticle(int articleid);

	public List<Article> infi(String company);
	
}
